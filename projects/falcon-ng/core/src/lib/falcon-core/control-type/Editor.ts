import { BaseControl } from '../model/base-control';
import { ControlType } from '../model/enum';

export class Editor extends BaseControl<string> {
  override controlType = ControlType.Editor;
}
