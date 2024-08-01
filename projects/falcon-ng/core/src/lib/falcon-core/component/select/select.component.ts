import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';

@Component({
  selector: 'fal-select',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ...sharedControlDeps,
  ],
  viewProviders: [controlProvider],
  template: `<mat-form-field appearance="outline" class="w-full">
    <mat-label>{{ control.config.label }}</mat-label>
    <mat-select
      [formControlName]="control.formControlName"
      [placeholder]="control.config.placeHolder">
      <mat-option>None</mat-option>
      <mat-option value="option1">Option 1</mat-option>
      <mat-option value="option2">Option 2</mat-option>
      <mat-option value="option3">Option 3</mat-option>
    </mat-select>
  </mat-form-field>`,
  styles: `.w-full {
    width: 100%
  }`,
})
export class SelectComponent extends BaseControlBuilder {}
