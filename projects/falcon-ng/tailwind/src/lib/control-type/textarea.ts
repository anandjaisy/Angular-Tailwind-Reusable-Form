import { BaseControl } from '../base-control';
import { ControlType } from '../model/ControlType';

export class Textarea extends BaseControl<string> {
  override controlType = ControlType.TextArea;
}
