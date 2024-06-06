import { Directive, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Directive()
export class BaseControlBuilder implements OnInit, OnDestroy {
  @Input({ required: true }) formControlName: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';

  private parentGroupDir = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentGroupDir.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(this.formControlName, new FormControl(''));
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.formControlName);
  }
}
