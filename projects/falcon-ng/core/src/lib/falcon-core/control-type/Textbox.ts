import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class Textbox extends BaseControl<string> {
  override controlType = Control.TextBox;
}
