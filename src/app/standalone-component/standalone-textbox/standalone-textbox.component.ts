import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { banWords } from '../../common/validations';
import {
  BaseControl,
  FalconCoreModule,
  Textbox,
} from '../../../../projects/falcon-ng/core/src/public-api';

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
  diableInput: BaseControl<string> = new Textbox({
    formControlName: 'diableInput',
    disabled: true,
    placeHolder: 'Disable input',
    validations: [
      {
        name: 'cannotContainSpace',
        validator: banWords('Cannot contain space'),
      },
    ],
  });
  prefixIcon: BaseControl<string> = new Textbox({
    formControlName: 'prefixIcon',
    placeHolder: 'prefix icon',
    prefix: { isIcon: true, text: 'lock' },
    validations: [
      {
        name: 'cannotContainSpace',
        validator: banWords('Cannot contain space'),
      },
    ],
  });
  suffixIcon: BaseControl<string> = new Textbox({
    formControlName: 'suffixIcon',
    placeHolder: 'suffix icon',
    suffix: { isIcon: true, text: 'lock' },
    validations: [
      {
        name: 'cannotContainSpace',
        validator: banWords('Cannot contain space'),
      },
    ],
  });

  iconToolTip: BaseControl<string> = new Textbox({
    formControlName: 'suffixIcon',
    placeHolder: 'suffix icon',
    suffix: { isIcon: true, text: 'lock', toolTipText: 'This is helpful' },
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
