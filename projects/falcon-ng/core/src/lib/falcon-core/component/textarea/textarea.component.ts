import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';

@Component({
  selector: 'fal-textarea',
  imports: [MatInputModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: `
    <mat-form-field [appearance]="control.config.appearance" class="w-full">
      @if(control.config.label){
      <mat-label>{{ control.config.label }}</mat-label>
      }
      <textarea
        matInput
        [formControlName]="control.formControlName"
        [placeholder]="control.config.placeHolder"
        [ngStyle]="control.config.style"
        [ngClass]="control.config.class"
        [cdkTextareaAutosize]="control.config.textAreaProperty.cdkTextareaAutosize"
        [cdkAutosizeMinRows]="control.config.textAreaProperty.cdkAutosizeMinRows"
        [cdkAutosizeMaxRows]="control.config.textAreaProperty.cdkAutosizeMaxRows"
        [rows]="control.config.textAreaProperty.rows"
        [cols]="control.config.textAreaProperty.cols"
        [disabled]="control.config.disabled"
        [container]="containerDir.container"
      >
      </textarea>
    </mat-form-field>
    <ng-container
      falconValidationMessageContainer
      #containerDir="falconValidationMessageContainer"
    />
  `,
  styles: `.w-full{width: 100%}`,
})
export class TextareaComponent extends BaseControlBuilder {}
