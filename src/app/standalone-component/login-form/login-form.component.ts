import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FalconCoreModule } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/falcon-core.module';
import { BaseControl } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/model/base-control';
import { Textbox } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/control-type/Textbox';

@Component({
    selector: 'app-login-form',
    imports: [ReactiveFormsModule, FalconCoreModule],
    templateUrl: './login-form.component.html',
    styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  userName: BaseControl<string> = new Textbox({
    formControlName: 'userName',
    label: 'User Name',
    validations: [{ validator: Validators.required}],
  });
  password: BaseControl<string> = new Textbox({ formControlName: 'password', label: 'Password' });

  constructor() {
    this.loginForm = new FormGroup({});
  }

  submit(): void {
    if (this.loginForm.valid)
      console.log(this.loginForm.value);
  }
}
