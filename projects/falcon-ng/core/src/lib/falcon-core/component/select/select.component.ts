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
      [value]="control.config.value"
      [formControlName]="control.formControlName"
      [placeholder]="control.config.placeHolder"
      (selectionChange)="selectionChange($event)">
      @for(option of control.config.options; track option){
      <mat-option [value]="option.key">{{ option.value }}</mat-option>
      }
    </mat-select>
  </mat-form-field>`,
    styles: `.w-full {
    width: 100%
  }`
})
export class SelectComponent extends BaseControlBuilder {
  selectionChange(event: MatSelectChange): void {
    this.control.config.event.change?.emit(event);
  }
}
