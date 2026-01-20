import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'falcon-group-control',
  template: `<div [formGroup]="innerGroup">
    <ng-content></ng-content>
  </div>`,
  standalone: false,
})
export class GroupControlBuilderComponent implements OnInit, OnDestroy {
  @Input({ required: true }) formGroupName: string | undefined = undefined;

  readonly innerGroup = new FormGroup({});

  private parentContainer = inject(ControlContainer, {
    optional: true,
    skipSelf: true,
  });

  get getParentFormGroup(): FormGroup {
    return this.parentContainer?.control as FormGroup;
  }

  ngOnInit(): void {
    const parent = this.getParentFormGroup;
    if (this.formGroupName && !parent.get(this.formGroupName)) {
      parent.addControl(this.formGroupName, this.innerGroup);
    }
  }

  ngOnDestroy(): void {
    const parent = this.getParentFormGroup;
    if (parent && this.formGroupName && parent.get(this.formGroupName)) {
      parent.removeControl(this.formGroupName);
    }
  }
}
