import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class Divider extends BaseControl<string> {
  override controlType = ControlType.Divider;
}
