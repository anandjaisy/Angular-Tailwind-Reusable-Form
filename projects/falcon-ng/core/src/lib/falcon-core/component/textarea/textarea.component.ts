import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';

@Component({
  selector: 'fal-textarea',
  standalone: true,
  imports: [MatInputModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: `
    <mat-form-field appearance="outline" class="w-full">
      <mat-label>{{ control.config.label }}</mat-label>
      <textarea
        matInput
        [formControlName]="control.formControlName"
        [placeholder]="control.config.placeHolder"></textarea>
    </mat-form-field>
  `,
  styles: `.w-full{width: 100%}`,
})
export class TextareaComponent extends BaseControlBuilder {}
