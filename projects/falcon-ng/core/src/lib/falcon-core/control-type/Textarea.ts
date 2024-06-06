import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class Textarea extends BaseControl<string> {
  override controlType = Control.TextArea;
}
