import { BaseControl } from '../base-control';
import { ControlType } from '../model/ControlType';

export class Select extends BaseControl<string> {
  override controlType = ControlType.Select;
}
