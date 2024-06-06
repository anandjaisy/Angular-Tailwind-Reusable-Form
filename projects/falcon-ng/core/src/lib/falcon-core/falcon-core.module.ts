import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularmaterialModule } from './angularmaterial.module';
import { ControlInjectionPipe } from './control-injection.pipe';
import { ControlBuilderComponent } from './control-builder/control-builder.component';

@NgModule({
  declarations: [ControlBuilderComponent],
  imports: [
    AngularmaterialModule,
    CommonModule,
    ControlInjectionPipe,
  ],
  exports: [AngularmaterialModule, ControlBuilderComponent],
})
export class FalconCoreModule { }
