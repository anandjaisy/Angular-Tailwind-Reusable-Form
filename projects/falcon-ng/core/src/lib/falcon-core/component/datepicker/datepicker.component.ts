import { Component, ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'fal-datepicker',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: `<mat-form-field [appearance]="control.config.appearance" class="w-full">
    @if (control.config.label) {
      <mat-label>{{ control.config.label }}</mat-label>
    }
    @if (control.config.type === 'date-range') {
      <div class="flex flex-row items-center">
        <mat-date-range-input [rangePicker]="picker" [formGroup]="dateRange">
          <input matStartDate placeholder="Start date" formControlName="start" />
          <input matEndDate placeholder="End date" formControlName="end" />
        </mat-date-range-input>
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-date-range-picker #picker></mat-date-range-picker>
      </div>
    } @else {
      <div class="flex flex-row items-center">
        <input
          matInput
          [matDatepicker]="picker"
          [formControlName]="control.formControlName"
          [placeholder]="control.config.placeHolder"
          [ngStyle]="control.config.style"
          [ngClass]="control.config.class"
          [container]="containerDir.container"
        />
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </div>
    }
    @if (control.config.hint?.show) {
      <mat-hint>{{ control.config.hint?.text }}</mat-hint>
    }
    <mat-error>
      <ng-container
        falconValidationMessageContainer
        #containerDir="falconValidationMessageContainer"
      />
    </mat-error>
  </mat-form-field> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .w-full {
      width: 100%;
    }
    .mat-mdc-text-field-wrapper {
      height: revert-rule !important;
    }
  `,
})
export class DatepickerComponent extends BaseControlBuilder {
  public readonly dateRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  protected override registerControl(): void {
    if (this.control.config.type === 'date-range') {
      this.parentFormGroup.addControl('range', this.dateRange);
      return;
    }

    super.registerControl();
  }
}
