import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';

@Component({
  selector: 'fal-textbox',
  imports: [MatInputModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: `
    <mat-form-field appearance="outline" class="w-full">
      @if(control.config.label){
      <mat-label>{{ control.config.label }}</mat-label>
      }
      <input
        matInput
        [formControlName]="control.formControlName"
        [placeholder]="control.config.placeHolder"
        [ngStyle]="control.config.style"
        [ngClass]="control.config.class"
        [container]="containerDir.container" />
    </mat-form-field>
    <ng-container
      falconValidationMessageContainer
      #containerDir="falconValidationMessageContainer" />
  `,
  styles: `.w-full {
    width: 100%
  }`,
})
export class TextboxComponent extends BaseControlBuilder {}
