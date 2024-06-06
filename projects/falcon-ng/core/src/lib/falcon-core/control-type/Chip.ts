import { BaseControl } from '../model/base-control';
import { ControlType } from '../model/enum';

export class Chip extends BaseControl<string> {
  override controlType = ControlType.Chip;
}
