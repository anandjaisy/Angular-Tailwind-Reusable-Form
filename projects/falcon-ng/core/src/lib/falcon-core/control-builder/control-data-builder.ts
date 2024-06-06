import { InjectionToken } from '@angular/core';
import { BaseControl } from '../model/base-control';

export interface ControlData {
  formControlName: string;
  config: BaseControl<any>;
}
export const CONTROL_DATA = new InjectionToken<ControlData>('Control Data');
