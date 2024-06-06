import { InjectionToken } from '@angular/core';
import { BaseControl } from '../model/base-control';

export interface ControlData<T> {
  formControlName: string;
  config: BaseControl<T>;
}
export const CONTROL_DATA = new InjectionToken<ControlData<any>>('Control Data');
