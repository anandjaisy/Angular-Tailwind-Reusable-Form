import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class CheckBox extends BaseControl<boolean> {
  override controlType = Control.Checkbox;
}
