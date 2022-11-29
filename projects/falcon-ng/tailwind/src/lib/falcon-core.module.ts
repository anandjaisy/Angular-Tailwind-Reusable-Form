import {ModuleWithProviders, NgModule} from '@angular/core';
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

@NgModule({
  declarations: [
    TextboxComponent,
    TextareaComponent,
    SelectComponent,
    ReactiveFieldDirective,
    ControlBuilderComponent
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
  ]
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