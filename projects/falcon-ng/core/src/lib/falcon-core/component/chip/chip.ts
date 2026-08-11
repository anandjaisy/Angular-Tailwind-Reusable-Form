import { Component } from '@angular/core';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'fal-chip',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatIconModule,
    MatChipsModule,
    ...sharedControlDeps,
  ],
  providers: [provideNativeDateAdapter()],
  viewProviders: [controlProvider],
  template: `<ng-container>
    @switch (control?.config?.type) {
      @case ('search') {
        <p>Welcome, search.</p>
      }
      @case ('text') {
        <p>Welcome, text chip.</p>
      }
      @case ('drag-drop') {
        <p>Welcome, drag and drop chip.</p>
      }
      @case ('select') {
        <mat-chip-listbox
          aria-label="Chips selection"
          [multiple]="control?.config?.selectProperty?.multiple"
          [formControlName]="control.formControlName"
          [class]="control?.config?.class"
        >
          @for (option of control?.config?.options; track option.key) {
            <mat-chip-option [class]="option.class">{{ option.value }}</mat-chip-option>
          }
        </mat-chip-listbox>
      }
      @default {
        <mat-chip-set aria-label="Basic chip" [class]="control?.config?.class">
          @for (option of control?.config?.options; track option.key) {
            <mat-chip [class]="option.class">{{ option.value }}</mat-chip>
          }
        </mat-chip-set>
      }
    }
  </ng-container>`,
  styles: ``,
})
export class Chip extends BaseControlBuilder {}
