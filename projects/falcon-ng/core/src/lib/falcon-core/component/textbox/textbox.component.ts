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
      <mat-label>{{ control.config.label }}</mat-label>
      <input
        matInput
        [formControlName]="control.formControlName"
        [placeholder]="control.config.placeHolder"
        [container]="containerDir.container" />
      <ng-container
        falconValidationMessageContainer
        #containerDir="falconValidationMessageContainer" />
    </mat-form-field>
  `,
    styles: `.w-full {
    width: 100%
  }`
})
export class TextboxComponent extends BaseControlBuilder {}
