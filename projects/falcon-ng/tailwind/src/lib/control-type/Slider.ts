import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class Slider extends BaseControl<any> {
  override controlType = ControlType.Slider;
}
