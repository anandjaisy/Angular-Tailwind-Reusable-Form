import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'fal-textbox',
  imports: [MatInputModule, MatIconModule, MatTooltipModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: `
    <mat-form-field [appearance]="control.config.appearance" class="w-full">
      @if(control.config.label){
      <mat-label>{{ control.config.label }}</mat-label>
      }
      <input
        matInput
        [type]="control.config.type"
        [formControlName]="control.formControlName"
        [placeholder]="control.config.placeHolder"
        [ngStyle]="control.config.style"
        [ngClass]="control.config.class"
        [container]="containerDir.container"
      />
      @if(control.config.prefix && control.config.prefix.isIcon){
      <mat-icon matPrefix [matTooltip]="control.config.prefix.toolTipText!">{{
        control.config.prefix.text
      }}</mat-icon>
      } @if(control.config.suffix && control.config.suffix.isIcon){
      <mat-icon matSuffix [matTooltip]="control.config.suffix.toolTipText!">{{
        control.config.suffix.text
      }}</mat-icon>
      }
    </mat-form-field>
    <ng-container
      falconValidationMessageContainer
      #containerDir="falconValidationMessageContainer"
    />
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `.w-full {
    width: 100%
  }`,
})
export class TextboxComponent extends BaseControlBuilder {}
