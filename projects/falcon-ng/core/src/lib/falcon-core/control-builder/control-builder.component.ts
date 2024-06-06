import { Component, Input } from '@angular/core';
import { ComponentResolver, ControlType } from '../component-resolver.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'falcon-control',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-container [ngComponentOutlet]="componentResolver.resolver(type)"></ng-container>`
})
export class ControlBuilderComponent {
  @Input({ required: true }) formControlName: string = '';
  @Input({ required: true }) type: ControlType = 'textbox';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  constructor(public componentResolver: ComponentResolver) {
  }
}
