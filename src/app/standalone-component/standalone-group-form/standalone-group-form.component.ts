import { AfterViewInit, Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { FalconCoreModule } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/falcon-core.module';
import { Textbox } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/control-type/Textbox';
import { BaseControl } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/model/base-control';
import { banWords } from '../../common/validations';

@Component({
  selector: 'app-standalone-group-form',
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
  templateUrl: './standalone-group-form.component.html',
  styleUrl: './standalone-group-form.component.scss',
})
export class StandaloneGroupFormComponent {
  firstName: BaseControl<string> = new Textbox({
    formControlName: 'firstName',
    label: 'First Name',
  });
  nextLevel: BaseControl<string> = new Textbox({
    formControlName: 'nextLevel',
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
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({});
  }

  submit(): void {
    if (this.loginForm.valid) console.log(this.loginForm.value);
  }
}
