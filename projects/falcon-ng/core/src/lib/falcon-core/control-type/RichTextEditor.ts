import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class RichTextEditor extends BaseControl<any> {
  override controlType = Control.Editor;
}
