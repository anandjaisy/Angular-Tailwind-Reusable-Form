import { Directive, inject, Input, OnDestroy, OnInit, StaticProvider } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CONTROL_DATA } from './control-data-builder';

export const sharedControlDeps = [CommonModule, ReactiveFormsModule];
export const controlProvider: StaticProvider = {
  provide: ControlContainer,
  useFactory: () => inject(ControlContainer, { skipSelf: true })
}

@Directive()
export class BaseControlBuilder implements OnInit, OnDestroy {
  private parentGroupDir = inject(ControlContainer);
  public control = inject(CONTROL_DATA);

  get parentFormGroup() {
    return this.parentGroupDir.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(this.control.formControlName, new FormControl(''));
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.control.formControlName);
  }
}
