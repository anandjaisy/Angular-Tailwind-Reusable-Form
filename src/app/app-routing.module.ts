import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComponenttestingComponent} from "./componenttesting/componenttesting.component";
import {TextboxComponent} from "./textbox/textbox.component";

const routes: Routes = [
  //{path: 'auth-callback', component: AuthCallbackComponent},
  {path: '', component: ComponenttestingComponent},
  {path: 'input', component: TextboxComponent},
//  {path: 'auto-complete', component: AutoCompleteComponent},
//  {path: 'checkbox', component: CheckboxComponent},
//  {path: 'datepicker', component: DatepickerComponent},
//  {path: 'form-field', component: FormFieldComponent},
//  {path: 'radio', component: RadioComponent},
//  {path: 'select', component: SelectComponent},
//  {path: 'slider', component: SliderComponent},
//  {path: 'slide-toggle', component: SlideToggleComponent},
//  {path: 'button-indicator', component: ButtonIndicatorComponent},
//  {path: 'text-area', component: TextAreaComponent},
//  {path: 'button-toggle', component: ButtonToggleComponent},
//  {path: 'progress-spinner', component: ProgressSpinnerComponent},
//  {path: 'progress-bar', component: ProgressBarComponent},
//  {path: 'bottom-sheet', component: ExampleBottomSheetComponent},
//  {path: 'snackbar', component: SnackbarComponent},
//  {path: 'dialog', component: ModalDialogComponent},
//  {path: 'chips', component: ChipsComponent},
//  {path: 'tables', component: TableComponent},
//  {path: 'pagination', component: AppPaginationComponent},
//  {path: 'editor', component: AngularRichTextEditorComponent},
//  {path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
