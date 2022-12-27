import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TextboxComponent} from './textbox/textbox.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponenttestingComponent} from './componenttesting/componenttesting.component';
import {FalconCoreModule} from "../../projects/falcon-ng/tailwind/src/lib/falcon-core.module";
import {environment} from "../environments/environment";
import {CodeButtonComponent} from "./common/component/code-button/code-button.component";
import {HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions} from "ngx-highlightjs";
import {CodeGeneratorComponent} from "./common/component/code-generator/code-generator.component";
import {InputErrorComponent} from "./textbox/input-error/input-error.component";
import {InputFloatingLabelComponent} from "./textbox/input-floating-label/input-floating-label.component";
import {InputHintComponent} from "./textbox/input-hint/input-hint.component";
import {InputPrefixSuffixComponent} from "./textbox/input-prefix-suffix/input-prefix-suffix.component";
import { SelectComponent } from './select/select.component';
import { TextAreaComponent } from './text-area/text-area.component';
import {SelectHtmlComponent} from "./select/select-html/select-html.component";
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { RadioComponent } from './radio/radio.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ExampleBottomSheetComponent } from './example-bottom-sheet/example-bottom-sheet.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { ChipsComponent } from './chips/chips.component';
import { TableComponent } from './table/table.component';
import { AppPaginationComponent } from './app-pagination/app-pagination.component';
import { AngularRichTextEditorComponent } from './angular-rich-text-editor/angular-rich-text-editor.component';
import { FormComponent } from './form/form.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { ButtonIndicatorComponent } from './button-indicator/button-indicator.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { FormFieldComponent } from './form-field/form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    ComponenttestingComponent,
    CodeButtonComponent,
    CodeGeneratorComponent,
    InputErrorComponent,
    InputFloatingLabelComponent,
    InputHintComponent,
    InputPrefixSuffixComponent,
    SelectComponent,
    TextAreaComponent,
    SelectHtmlComponent,
    CheckboxComponent,
    DatepickerComponent,
    RadioComponent,
    ButtonToggleComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    ExampleBottomSheetComponent,
    SnackbarComponent,
    ModalDialogComponent,
    ChipsComponent,
    TableComponent,
    AppPaginationComponent,
    AngularRichTextEditorComponent,
    FormComponent,
    SliderComponent,
    SlideToggleComponent,
    ButtonIndicatorComponent,
    AuthCallbackComponent,
    AutoCompleteComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FalconCoreModule.forRoot(environment),
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
