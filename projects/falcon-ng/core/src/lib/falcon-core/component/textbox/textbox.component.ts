import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BaseControlBuilder, controlProvider, sharedControlDeps } from '../../control-builder/base-control-builder';
import { ValidationErrorComponent } from '../validation-error/validation-error.component';

@Component({
  selector: 'falcon-textbox',
  standalone: true,
  imports: [MatInputModule, ...sharedControlDeps,ValidationErrorComponent],
  viewProviders: [controlProvider],
  template: `
    <mat-form-field appearance="outline" class="w-full">
      <mat-label>{{control.config.label}}</mat-label>
      <input matInput [formControlName]="control.formControlName" [placeholder]="control.config.placeHolder">
      <falcon-validation-error/>
    </mat-form-field>
  `,
  styles: `.w-full{width: 100%}`
})
export class TextboxComponent extends BaseControlBuilder{}
