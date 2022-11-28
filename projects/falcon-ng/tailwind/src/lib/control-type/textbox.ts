import { BaseControl } from '../base-control';
import { ControlType } from '../model/ControlType';

export class Textbox extends BaseControl<string> {
  override controlType = ControlType.TextBox;
}
