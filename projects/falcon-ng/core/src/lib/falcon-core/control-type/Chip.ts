import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class Chip extends BaseControl<string> {
  override controlType = Control.Chip;
}
