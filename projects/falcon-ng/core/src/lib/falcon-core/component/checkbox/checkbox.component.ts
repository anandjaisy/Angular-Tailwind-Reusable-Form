import { Component } from '@angular/core';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'fal-checkbox',
  imports: [MatCheckboxModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: ` <mat-checkbox
    [ngStyle]="control.config.style"
    [ngClass]="control.config.class"
    [labelPosition]="control.config.labelPosition"
    [formControlName]="control.config.formControlName"
    (change)="change($event)">
    {{ control.config.label }}
  </mat-checkbox>`,
})
export class CheckboxComponent extends BaseControlBuilder {
  change($event: any) {
    this.control.config.event.change?.emit(event);
  }
}
