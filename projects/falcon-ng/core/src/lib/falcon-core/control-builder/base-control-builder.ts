import { Directive, inject, Input, OnDestroy, OnInit, StaticProvider } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule, ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CONTROL_DATA } from './control-data-builder';
import { IValidator } from '../model/ivalidator';
import { ValidationMessageDirective } from '../component/validation-error/validation-message.directive';

export const sharedControlDeps = [CommonModule, ReactiveFormsModule, ValidationMessageDirective];
export const controlProvider: StaticProvider = {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true })
}

@Directive()
export class BaseControlBuilder implements OnInit, OnDestroy {
  private parentGroupDir = inject(ControlContainer);
  public control = inject(CONTROL_DATA);
  private formControl: AbstractControl = new FormControl(this.control.config.value, this.bindValidators(this.control.config.validations))

  get parentFormGroup() {
    return this.parentGroupDir.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(this.control.formControlName, this.formControl);
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.control.formControlName);
  }

  private bindValidators(validations: IValidator[]): ValidatorFn | null {
    if (validations.length > 0) {
      const validatorList: ValidatorFn[] = validations.map((valid: IValidator) => valid.validator);
      return Validators.compose(validatorList);
    }
    return Validators.nullValidator;
  }
}
