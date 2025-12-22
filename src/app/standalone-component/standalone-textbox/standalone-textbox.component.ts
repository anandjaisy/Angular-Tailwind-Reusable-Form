import { Component } from '@angular/core';
import { Textbox } from '@falcon-ng/core';
import { BaseControl } from '@falcon-ng/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FalconCoreModule } from '@falcon-ng/core';
import { HighlightModule } from 'ngx-highlightjs';
import { banWords } from '../../common/validations';

@Component({
  selector: 'app-standalone-textbox',
  imports: [
    FalconCoreModule,
    ReactiveFormsModule,
    FalconTailwindModule,
    HighlightModule,
    MatCard,
    MatCardContent,
    MatDivider,
    MatIcon,
    MatMiniFabAnchor,
    RouterLink,
  ],
  templateUrl: './standalone-textbox.component.html',
  styleUrl: './standalone-textbox.component.scss',
})
export class StandaloneTextboxComponent {
  firstName: BaseControl<string> = new Textbox({
    formControlName: 'firstName',
    label: 'First Name',
  });
  firstNameWithOutLabel: BaseControl<string> = new Textbox({
    formControlName: 'firstName',
  });
  firstNameWithValidation: BaseControl<string> = new Textbox({
    formControlName: 'firstNameWithValidation',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Required Field',
      },
    ],
  });
  customValidation: BaseControl<string> = new Textbox({
    formControlName: 'customValidation',
    validations: [
      {
        name: 'cannotContainSpace',
        validator: banWords('Cannot contain space'),
      },
    ],
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
