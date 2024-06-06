import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class SliderToggle extends BaseControl<boolean> {
  override controlType = Control.SlideToggle;
}
