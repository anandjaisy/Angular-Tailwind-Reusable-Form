import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class DatePicker extends BaseControl<string> {
  override controlType = ControlType.DatePicker;
}
