import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class Textarea extends BaseControl<string> {
  override controlType = ControlType.TextArea;
}
