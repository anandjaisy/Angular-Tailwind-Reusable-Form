import { Component } from '@angular/core';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'fal-slide-toggle',
  imports: [MatSlideToggleModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: ` <mat-slide-toggle
    [ngStyle]="control.config.style"
    [ngClass]="control.config.class"
    [labelPosition]="control.config.labelPosition"
    [formControlName]="control.config.formControlName"
    (change)="change($event)"
  >
    {{ control.config.label }}
  </mat-slide-toggle>`,
})
export class SlideToggle extends BaseControlBuilder {
  change($event: MatSlideToggleChange) {
    this.control.config.event.change?.emit($event);
  }
}
