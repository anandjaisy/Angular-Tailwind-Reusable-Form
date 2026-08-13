import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'fal-select',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule,
    ...sharedControlDeps,
  ],
  viewProviders: [controlProvider],
  template: `<mat-form-field [appearance]="control.config.appearance" class="w-full">
    @if (control.config.label) {
      <mat-label>{{ control.config.label }}</mat-label>
    }
    <mat-select
      [value]="control.config.value"
      [formControlName]="control.formControlName"
      [placeholder]="control.config.placeHolder"
      [ngStyle]="control.config.style"
      [ngClass]="control.config.class"
      (selectionChange)="selectionChange($event)"
      [container]="containerDir.container"
      [multiple]="control.config.selectProperty.multiple"
    >
      @for (option of control.config.options; track option) {
        <mat-option [value]="option.key">{{ option.value }}</mat-option>
      }
    </mat-select>
    @if (control.config.prefix && control.config.prefix.isIcon) {
      <mat-icon matPrefix [matTooltip]="control.config.prefix.toolTipText!">{{
        control.config.prefix.text
      }}</mat-icon>
    }
    @if (control.config.suffix && control.config.suffix.isIcon) {
      <mat-icon matSuffix [matTooltip]="control.config.suffix.toolTipText!">{{
        control.config.suffix.text
      }}</mat-icon>
    }
    <mat-error>
      <ng-container
        falconValidationMessageContainer
        #containerDir="falconValidationMessageContainer"
      />
    </mat-error>
  </mat-form-field>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .w-full {
      width: 100%;
    }
  `,
})
export class SelectComponent extends BaseControlBuilder {
  selectionChange(event: MatSelectChange): void {
    this.control.config.event.change?.emit(event);
  }
}
