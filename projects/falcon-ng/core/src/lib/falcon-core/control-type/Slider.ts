import { BaseControl } from '../model/base-control';
import { ControlType } from '../model/enum';

export class Slider extends BaseControl<number> {
  override controlType = ControlType.Slider;
}
