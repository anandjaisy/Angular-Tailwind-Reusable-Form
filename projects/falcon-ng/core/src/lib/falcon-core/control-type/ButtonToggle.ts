import { BaseControl } from '../model/base-control';
import { ControlType } from '../model/enum';

export class ButtonToggle extends BaseControl<string> {
  override controlType = ControlType.ButtonToggle;
}
