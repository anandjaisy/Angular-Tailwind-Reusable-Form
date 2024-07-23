import { AfterContentChecked, ChangeDetectorRef, Component, Input, PipeTransform } from '@angular/core';
import { ComponentResolver } from '../component-resolver';
import { BaseControl } from '../model/base-control';
import { controlProvider } from './base-control-builder';

@Component({
  selector: 'falcon-control',
  viewProviders:[controlProvider],
  template: `<ng-container class="w-full" [ngComponentOutlet]="componentResolver.resolver(control.controlType) | async"
                           [ngComponentOutletInjector]="control.formControlName | controlInjection: control"></ng-container>`
})
export class ControlBuilderComponent<T> implements AfterContentChecked {
  @Input({ required: true }) control!: BaseControl<T>;
  constructor(public componentResolver: ComponentResolver,private cdref: ChangeDetectorRef) {}
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
}
