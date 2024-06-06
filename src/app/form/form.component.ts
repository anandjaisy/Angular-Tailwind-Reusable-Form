import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { Observable, of } from 'rxjs';
import { Appearance } from '../../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { Textbox } from '@falcon-ng/core';
import { Button } from '@falcon-ng/core';
import { Validators } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [FalconTailwindModule, CodeGeneratorComponent, HighlightModule],
})
export class FormComponent extends BaseFormComponent<string> implements OnInit {
  constructor() {
    super();
    this.defineForm();
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'flex flex-col m-5',
      baseControls: [
        new Textbox({
          formControlName: 'firstName',
          label: 'User Name',
          value: '',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Required Field',
            },
          ],
        }),
        new Textbox({
          formControlName: 'lastName',
          label: 'Password',
          value: '',
          type: 'password',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Required Field',
            },
          ],
        }),
        new Button({
          label: 'Submit',
          appearance: Appearance.Raised,
          color: 'primary',
          class: 'flex justify-center',
        }),
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }
}
