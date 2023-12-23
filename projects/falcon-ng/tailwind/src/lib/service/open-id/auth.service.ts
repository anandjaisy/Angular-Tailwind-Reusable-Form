import { Injectable } from '@angular/core';
import { LoggerService } from '../logger.service';
import { TokenHelperService } from './TokenHelperService';
import { EnvironmentViewModel } from '../../model/environments';
import { AppSettingService } from '../appsetting.service';
import {
  User,
  UserManager,
  UserManagerSettings,
  UserProfile,
} from 'oidc-client-ts';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static USER_LOADED_EVENT = 'USER_LOADED';
  static USER_UNLOADED_EVENT = 'USER_UNLOADED';

  private initialized: boolean = false;
  public userManager!: UserManager;
  private user: any;
  public settings!: UserManagerSettings;

  private accessToken!: Object;
  private signingOut: boolean = false;

  constructor(
    private logger: LoggerService,
    private tokenHelperService: TokenHelperService
  ) {}

  async initialize(environment: EnvironmentViewModel): Promise<void> {
    if (this.initialized) return;
    this.settings = this.getClientSettings(environment);
    this.userManager = new UserManager(this.settings);
    this.userManager.events.addUserLoaded(user => {
      this.user = user;
    });

    this.userManager.events.addAccessTokenExpiring(() => {
      this.logger.info('IdSvr token expiring ' + new Date().toLocaleString());
    });

    this.userManager.events.addAccessTokenExpired(() => {
      this.logger.info('IdSvr token expired ' + new Date().toLocaleString());
      this.logout(false);
    });

    this.userManager.events.addSilentRenewError(e => {
      this.logger.error(
        'IdSvr silent renew error ' + e.message + new Date().toLocaleString()
      );
      this.logout(false);
    });

    this.userManager.events.addUserLoaded(user => {
      this.logger.info(
        'IdSvr user session is ready ' + new Date().toLocaleString()
      );
      this.accessToken = this.tokenHelperService.getPayloadFromToken(
        user.access_token,
        false
      );
      this.user = user;
    });

    this.userManager.events.addUserUnloaded(() => {
      this.logger.info(
        'IdSvr user session has ended ' + new Date().toLocaleString()
      );

      if (!this.signingOut) {
        this.startAuthentication(
          window.location.pathname + window.location.search
        );
      }
    });

    this.userManager.events.addUserSignedOut(() => {
      this.logger.info('IdSvr user signed out ' + new Date().toLocaleString());
      this.logout(false);
    });

    this.user = await this.userManager.getUser();
    this.initialized = true;
  }

  public isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public getProfile(): UserProfile {
    return this.user.profile;
  }

  public getClaims(): UserProfile {
    return this.user.profile;
  }

  public getAuthorizationHeaderValue(): string {
    if (this.user != null)
      return `${this.user.token_type} ${this.user.access_token}`;
    return '';
  }

  getAccessToken(): any {
    return (
      this.accessToken ||
      this.tokenHelperService.getPayloadFromToken(this.user.access_token, false)
    );
  }

  async startAuthentication(returnUrl: string): Promise<void> {
    this.logger.info('[AuthService] startAuthentication', returnUrl);
    await this.userManager.clearStaleState();
    await this.userManager.signinRedirect().catch(err => {
      //this.log.debug("IdSvr sign in failed", err);
      return err;
    });
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User | null> {
    return this.userManager.signinSilent();
  }

  public logout(signoutRedirect?: boolean): Promise<void> {
    if (signoutRedirect === undefined || signoutRedirect !== false) {
      this.signingOut = true;
      signoutRedirect = true;
    }

    return this.userManager.signoutRedirect();
  }

  private getClientSettings(
    environment: EnvironmentViewModel
  ): UserManagerSettings {
    return {
      authority: environment?.openID?.authority as string,
      client_id: environment?.openID?.client_id as string,
      redirect_uri: environment?.openID?.redirect_uri as string,
      post_logout_redirect_uri: environment?.openID?.post_logout_redirect_uri,
      response_type: environment?.openID?.response_type,
      scope: environment?.openID?.scope,
      filterProtocolClaims: environment?.openID?.filterProtocolClaims,
      loadUserInfo: true,
      monitorSession: true,
      silent_redirect_uri: environment?.openID?.silent_redirect_uri,
      automaticSilentRenew: environment?.openID?.automaticSilentRenew,
      accessTokenExpiringNotificationTimeInSeconds: 2,
      checkSessionIntervalInSeconds: 2,
      silentRequestTimeoutInSeconds: 2,
    };
  }

  async isServiceReady(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      if (this.initialized) {
        this.logger.info('[AuthService] isServiceReady', true);
        resolve(true);
      } else {
        this.logger.info('[AuthService] isServiceReady', false);
        reject(false);
      }
    });
  }
}

export function authServiceFactory(
  authService: AuthService,
  appSettings: AppSettingService,
  environment: EnvironmentViewModel
) {
  return async () => {
    appSettings.isServiceReady.subscribe(item => {
      if (item) authService.initialize(environment);
    });
  };
}
