import { inject, Injector, Pipe, PipeTransform } from '@angular/core';
import { BaseControl } from '../model/base-control';
import { CONTROL_DATA, ControlData } from './control-data-builder';

@Pipe({
  name: 'controlInjection',
  standalone: true
})
export class ControlInjectionPipe<T> implements PipeTransform {
  injector = inject(Injector);
  transform(formControlName: string, config: BaseControl<T>): Injector {
    return Injector.create({
      parent: this.injector,
      providers: [
        {
          provide: CONTROL_DATA,
          useValue: { formControlName, config } as ControlData
        }
      ]
    });
  }
}
