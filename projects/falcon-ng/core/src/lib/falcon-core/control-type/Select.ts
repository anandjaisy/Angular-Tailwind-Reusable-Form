import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class Select extends BaseControl<string> {
  override controlType = Control.Select;
}
