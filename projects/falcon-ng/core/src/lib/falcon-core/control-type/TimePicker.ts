import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class TimePicker extends BaseControl<string> {
  override controlType = Control.TimePicker;
}
