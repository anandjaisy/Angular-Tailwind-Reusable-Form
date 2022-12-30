import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenttestingComponent } from './componenttesting/componenttesting.component';
import { TextboxComponent } from './textbox/textbox.component';
import { SelectComponent } from './select/select.component';
import { TextAreaComponent } from './text-area/text-area.component';
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
import {BottomSheetComponent} from "./bottom-sheet/bottom-sheet.component";

const routes: Routes = [
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: '', component: ComponenttestingComponent },
  { path: 'input', component: TextboxComponent },
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'select', component: SelectComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },
  { path: 'button-indicator', component: ButtonIndicatorComponent },
  { path: 'text-area', component: TextAreaComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'bottom-sheet', component: BottomSheetComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: ModalDialogComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'tables', component: TableComponent },
  { path: 'pagination', component: AppPaginationComponent },
  { path: 'editor', component: AngularRichTextEditorComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
