import { Component } from '@angular/core';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'fal-radio',
  imports: [MatFormFieldModule, MatRadioModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: `<div
    [ngStyle]="control.config.style"
    [ngClass]="control.config.class">
    <label class="radio-label-padding">{{
      control.config.label | titlecase
    }}</label>
    <mat-radio-group
      [attr.aria-label]="control.config.label"
      [labelPosition]="control.config.appearance"
      [formControlName]="control.formControlName"
      [ngStyle]="control.config.style"
      [ngClass]="control.config.class"
      (change)="radioGroupChangeEvent($event)">
      <mat-radio-button
        [ngClass]="control.config.class"
        *ngFor="let item of control.config.options"
        [value]="item.value"
        >{{ item.viewValue | titlecase }}
      </mat-radio-button>
    </mat-radio-group>
  </div>`,
})
export class RadioComponent extends BaseControlBuilder {
  radioGroupChangeEvent($event: MatRadioChange) {
    this.control.config.event.change?.emit($event);
  }
}
