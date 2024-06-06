import { BaseControl } from '../model/base-control';
import { ControlType } from '../model/enum';

export class Textbox extends BaseControl<string> {
  override controlType = ControlType.TextBox;
}
