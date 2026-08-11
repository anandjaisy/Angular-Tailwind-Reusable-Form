import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularmaterialModule } from './angularmaterial.module';
import { ControlInjectionPipe } from './control-builder/control-injection.pipe';
import { ControlBuilderComponent } from './control-builder/control-builder.component';
import { CardComponent } from './component/card/card.component';
import { ButtonComponent } from './component/button/button.component';
import { GroupControlBuilderComponent } from './control-builder/group-control-builder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ControlBuilderComponent,
    CardComponent,
    ButtonComponent,
    GroupControlBuilderComponent,
  ],
  imports: [AngularmaterialModule, CommonModule, ControlInjectionPipe, ReactiveFormsModule],
  exports: [
    AngularmaterialModule,
    ControlBuilderComponent,
    CardComponent,
    ButtonComponent,
    GroupControlBuilderComponent,
  ],
})
export class FalconCoreModule {}
