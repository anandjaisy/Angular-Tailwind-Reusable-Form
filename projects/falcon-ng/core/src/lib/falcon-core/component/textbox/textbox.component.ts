import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BaseControlBuilder, controlProvider, sharedControlDeps } from '../../control-builder/base-control-builder';

@Component({
  selector: 'falcon-textbox',
  standalone: true,
  imports: [MatInputModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: `
    <mat-form-field appearance="outline" [formControlName]="control.formControlName">
      <mat-label>{{control.config.label}}</mat-label>
      <input matInput [placeholder]="control.config.placeHolder">
    </mat-form-field>
  `,
})
export class TextboxComponent extends BaseControlBuilder{
}
