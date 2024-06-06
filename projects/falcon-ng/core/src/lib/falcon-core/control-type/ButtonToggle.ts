import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class ButtonToggle extends BaseControl<string> {
  override controlType = Control.ButtonToggle;
}
