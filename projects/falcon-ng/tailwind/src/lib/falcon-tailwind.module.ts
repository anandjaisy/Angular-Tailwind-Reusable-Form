import { ModuleWithProviders, NgModule, inject, provideAppInitializer } from '@angular/core';
import {TextboxComponent} from './component/textbox/textbox.component';
import {TextareaComponent} from './component/textarea/textarea.component';
import {SelectComponent} from './component/select/select.component';
import {ReactiveFieldDirective} from './reactive-field.directive';
import {AngularmaterialModule} from "@falcon-ng/core";
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
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { DatePickerComponent } from './component/date-picker/date-picker.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { RadioComponent } from './component/radio/radio.component';
import { AutoCompleteComponent } from './component/auto-complete/auto-complete.component';
import { ButtonToggleComponent } from './component/button-toggle/button-toggle.component';
import { ChipComponent } from './component/chips/chip.component';
import { SliderComponent } from './component/slider/slider.component';
import { SlideToggleComponent } from './component/slide-toggle/slide-toggle.component';
import { ButtonComponent } from './component/button/button.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { SnackBarComponent } from './component/snack-bar/snack-bar.component';
import { BottomSheetComponent } from './component/bottom-sheet/bottom-sheet.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './component/progress-spinner/progress-spinner.component';
import { TableComponent } from './component/table/table.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { RichTextEditorComponent } from './component/rich-text-editor/rich-text-editor.component';
import {AngularEditorModule} from "@kolkov/angular-editor";

@NgModule({
  declarations: [
    TextboxComponent,
    TextareaComponent,
    SelectComponent,
    ReactiveFieldDirective,
    ControlBuilderComponent,
    DatePickerComponent,
    CheckboxComponent,
    RadioComponent,
    AutoCompleteComponent,
    ButtonToggleComponent,
    ChipComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonComponent,
    DialogComponent,
    SnackBarComponent,
    BottomSheetComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    TableComponent,
    PaginationComponent,
    RichTextEditorComponent
  ],
  imports: [
    AngularmaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularEditorModule,
  ],
  exports: [
    AngularmaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlBuilderComponent,
    RouterModule,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    PaginationComponent,
    TableComponent,
    AngularEditorModule,
    ButtonComponent,
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
    provideAppInitializer(() => {
        const initializerFn = (appSettingsFactory)(inject(AppSettingService));
        return initializerFn();
      }),
    provideAppInitializer(() => {
        const initializerFn = (authServiceFactory)(inject(AuthService), inject(AppSettingService), inject(EnvironmentViewModel));
        return initializerFn();
      }),
    provideAppInitializer(() => {
        const initializerFn = (loggerServiceFactory)(inject(LoggerService), inject(AppSettingService));
        return initializerFn();
      }),
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {duration: 5000},
    },
  ],
})
export class FalconTailwindModule {
  public static forRoot(
    environment: any,
  ): ModuleWithProviders<FalconTailwindModule> {
    return {
      ngModule: FalconTailwindModule,
      providers: [
        {provide: EnvironmentViewModel, useValue: environment},
      ],
    };
  }
}
