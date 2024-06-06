import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class Slider extends BaseControl<number> {
  override controlType = Control.Slider;
}
