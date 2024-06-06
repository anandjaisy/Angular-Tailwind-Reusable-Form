import { Component } from '@angular/core';
import { Textbox } from '@falcon-ng/core';
import { BaseControl } from '@falcon-ng/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CodeButtonComponent } from '../../common/component/code-button/code-button.component';
import { CodeGeneratorComponent } from '../../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { InputErrorComponent } from '../../textbox/input-error/input-error.component';
import { InputFloatingLabelComponent } from '../../textbox/input-floating-label/input-floating-label.component';
import { InputHintComponent } from '../../textbox/input-hint/input-hint.component';
import { InputPrefixSuffixComponent } from '../../textbox/input-prefix-suffix/input-prefix-suffix.component';
import { JsonPipe, NgIf } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FalconCoreModule } from '@falcon-ng/core';

@Component({
  selector: 'app-standalone-textbox',
  standalone: true,
  imports: [FalconCoreModule, ReactiveFormsModule, CodeButtonComponent, CodeGeneratorComponent, FalconTailwindModule, InputErrorComponent, InputFloatingLabelComponent, InputHintComponent, InputPrefixSuffixComponent, JsonPipe, MatCard, MatCardContent, MatDivider, MatIcon, MatMiniFabAnchor, NgIf, RouterLink],
  templateUrl: './standalone-textbox.component.html',
  styleUrl: './standalone-textbox.component.scss'
})
export class StandaloneTextboxComponent {
  firstName: BaseControl<string> = new Textbox({
    formControlName: 'firstName',
    label: 'First Name',
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
