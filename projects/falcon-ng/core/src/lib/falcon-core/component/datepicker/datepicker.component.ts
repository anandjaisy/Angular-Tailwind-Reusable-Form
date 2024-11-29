import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';

@Component({
    selector: 'fal-datepicker',
    providers: [provideNativeDateAdapter()],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        ...sharedControlDeps,
    ],
    viewProviders: [controlProvider],
    template: `<mat-form-field appearance="outline" class="w-full">
    <mat-label>{{ control.config.label }}</mat-label>
    <input
      matInput
      [matDatepicker]="picker"
      [formControlName]="control.formControlName"
      [placeholder]="control.config.placeHolder" />
    <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  </mat-form-field>`,
    styles: `.w-full {
    width: 100%
  }`
})
export class DatepickerComponent extends BaseControlBuilder {}
