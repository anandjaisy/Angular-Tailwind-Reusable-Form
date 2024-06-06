import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class Divider extends BaseControl<string> {
  override controlType = Control.Divider;
}
