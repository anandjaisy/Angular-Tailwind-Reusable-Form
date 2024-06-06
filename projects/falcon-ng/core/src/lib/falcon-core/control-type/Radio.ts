import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class Radio extends BaseControl<string> {
  override controlType = Control.Radio;
}
