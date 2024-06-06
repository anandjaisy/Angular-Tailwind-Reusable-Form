import { BaseControl } from '../model/base-control';
import { Control } from '../model/enum';

export class Editor extends BaseControl<string> {
  override controlType = Control.Editor;
}
