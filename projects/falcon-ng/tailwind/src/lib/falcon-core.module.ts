import {ModuleWithProviders, NgModule, APP_INITIALIZER, inject} from '@angular/core';
import {TextboxComponent} from './component/textbox/textbox.component';
import {TextareaComponent} from './component/textarea/textarea.component';
import {SelectComponent} from './component/select/select.component';
import {ReactiveFieldDirective} from './reactive-field.directive';
import {AngularmaterialModule} from "./module/angularmaterial.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ControlBuilderComponent} from "./control-builder/control-builder.component";
import {EnvironmentViewModel} from "./model/environments";
import {RouterModule} from "@angular/router";
import {IGenericHttpClient} from "./service/http/igeneric-http-client";
import {GenericHttpClient} from "./service/http/generic-http-client";
import {AppSettingService, appSettingsFactory} from "./service/appsetting.service";
import {AuthService, authServiceFactory} from "./service/open-id/auth.service";
import {LoggerService, loggerServiceFactory} from "./service/logger.service";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from "@angular/material/snack-bar";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import { DatePickerComponent } from './component/date-picker/date-picker.component';

@NgModule({
  declarations: [
    TextboxComponent,
    TextareaComponent,
    SelectComponent,
    ReactiveFieldDirective,
    ControlBuilderComponent,
    DatePickerComponent
  ],
  imports: [
    AngularmaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AngularmaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlBuilderComponent,
    RouterModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        (req, next) => {
          // Get the auth token from the service.
          const authToken = inject(AuthService).getAuthorizationHeaderValue();
          inject(LoggerService).info("Auth bearer token ", authToken);
          if (authToken) {
            req = req.clone({
              setHeaders: {
                'Content-Type': 'application/json',
                Authorization: authToken
              }
            });
          }
          return next(req);
        },
      ])
    ),
    {provide: IGenericHttpClient, useClass: GenericHttpClient},
    {
      provide: APP_INITIALIZER,
      useFactory: appSettingsFactory,
      deps: [AppSettingService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: authServiceFactory,
      deps: [AuthService, AppSettingService, EnvironmentViewModel],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: loggerServiceFactory,
      deps: [LoggerService, AppSettingService],
      multi: true,
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 5000},
    },
  ],
})
export class FalconCoreModule {
  public static forRoot(
    environment: any,
  ): ModuleWithProviders<FalconCoreModule> {
    return {
      ngModule: FalconCoreModule,
      providers: [
        {provide: EnvironmentViewModel, useValue: environment},
      ],
    };
  }
}