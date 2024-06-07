import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularmaterialModule } from './angularmaterial.module';
import { ControlInjectionPipe } from './control-builder/control-injection.pipe';
import { ControlBuilderComponent } from './control-builder/control-builder.component';
import { CardComponent } from './component/card/card.component';
import { ButtonComponent } from './component/button/button.component';

@NgModule({
  declarations: [
    ControlBuilderComponent,
    CardComponent,
    ButtonComponent],
  imports: [
    AngularmaterialModule,
    CommonModule,
    ControlInjectionPipe,
  ],
  exports: [AngularmaterialModule,
    ControlBuilderComponent,
    CardComponent,
    ButtonComponent],
})
export class FalconCoreModule { }
