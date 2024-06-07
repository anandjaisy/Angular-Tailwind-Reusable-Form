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

export const sharedControlDeps = [CommonModule, ReactiveFormsModule];
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

  private bindValidators(validations: IValidator[]) : ValidatorFn | null{
    if (validations.length > 0) {
      const validList: (ValidatorFn | null | undefined)[] = [];
      validations.forEach((valid: IValidator) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return Validators.nullValidator;
  }
}
