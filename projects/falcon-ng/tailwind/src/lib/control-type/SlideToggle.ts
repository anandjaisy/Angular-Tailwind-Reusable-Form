import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class SliderToggle extends BaseControl<boolean> {
  override controlType = ControlType.SlideToggle;
}
