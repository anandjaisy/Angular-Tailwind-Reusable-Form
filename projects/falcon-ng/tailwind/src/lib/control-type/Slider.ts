import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class Slider extends BaseControl<string> {
  override controlType = ControlType.Slider;
}
