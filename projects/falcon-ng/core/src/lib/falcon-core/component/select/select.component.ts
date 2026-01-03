import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';

@Component({
  selector: 'fal-select',
  imports: [MatInputModule, MatFormFieldModule, MatSelectModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: `<mat-form-field [appearance]="control.config.appearance" class="w-full">
      @if(control.config.label){
      <mat-label>{{ control.config.label }}</mat-label>
      }
      <mat-select
        [value]="control.config.value"
        [formControlName]="control.formControlName"
        [placeholder]="control.config.placeHolder"
        [ngStyle]="control.config.style"
        [ngClass]="control.config.class"
        [disabled]="control.config.disabled"
        (selectionChange)="selectionChange($event)"
        [container]="containerDir.container"
      >
        @for(option of control.config.options; track option){
        <mat-option [value]="option.key">{{ option.value }}</mat-option>
        }
      </mat-select>
    </mat-form-field>
    <ng-container
      falconValidationMessageContainer
      #containerDir="falconValidationMessageContainer"
    />`,
  styles: `.w-full {
    width: 100%
  }`,
})
export class SelectComponent extends BaseControlBuilder {
  selectionChange(event: MatSelectChange): void {
    this.control.config.event.change?.emit(event);
  }
}
