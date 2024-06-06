import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class DatePicker extends BaseControl<string> {
  override controlType = Control.DatePicker;
}
