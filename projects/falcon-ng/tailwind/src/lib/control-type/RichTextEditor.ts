import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class RichTextEditor extends BaseControl<any> {
  override controlType = ControlType.Editor;
}
