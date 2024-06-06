import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BaseControlBuilder } from '../../control-builder/BaseControlBuilder';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'falcon-textbox',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule],
  template: `
    <mat-form-field appearance="outline" [formControlName]="formControlName">
      <mat-label>{{label}}</mat-label>
      <input matInput [placeholder]="placeholder">
    </mat-form-field>
  `,
  styleUrl: './textbox.component.css'
})
export class TextboxComponent extends BaseControlBuilder{
}
