import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class AutoComplete extends BaseControl<string> {
  override controlType = ControlType.AutoComplete;
}
