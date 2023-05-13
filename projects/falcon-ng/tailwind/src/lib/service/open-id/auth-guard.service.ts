import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService : AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | Observable<boolean> | Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.authService.isServiceReady().then(() => {
        if (this.authService.isLoggedIn()) {
          resolve(true);
        } else {
          this.authService.startAuthentication(state.url);
          resolve(false);
        }
      })
    });
  }
}
