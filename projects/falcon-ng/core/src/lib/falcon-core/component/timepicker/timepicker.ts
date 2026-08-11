import { Component } from '@angular/core';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'fal-timepicker',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatIconModule,
    ...sharedControlDeps,
  ],
  providers: [provideNativeDateAdapter()],
  viewProviders: [controlProvider],
  template: `<mat-form-field>
      @if (control.config.label) {
        <mat-label>{{ control.config.label }}</mat-label>
      }
      <input
        matInput
        [matTimepicker]="timePicker"
        [formControlName]="control.formControlName"
        [placeholder]="control.config.placeHolder"
        [ngStyle]="control.config.style"
        [ngClass]="control.config.class"
        [container]="containerDir.container"
      />
      <mat-timepicker-toggle matIconSuffix [for]="timePicker" />
      <mat-timepicker #timePicker />
    </mat-form-field>
    <ng-container
      falconValidationMessageContainer
      #containerDir="falconValidationMessageContainer"
    />`,
  styles: ``,
})
export class Timepicker extends BaseControlBuilder {}
