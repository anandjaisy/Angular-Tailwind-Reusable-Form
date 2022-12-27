import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class Radio extends BaseControl<string> {
  override controlType = ControlType.Radio;
}
