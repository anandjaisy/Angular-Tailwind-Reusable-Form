import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class CheckBox extends BaseControl<boolean> {
  override controlType = ControlType.Checkbox;
}
