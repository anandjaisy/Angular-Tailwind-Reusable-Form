import { BaseControl } from '../base-control';
import { ControlType } from '../model/enum';

export class Editor extends BaseControl<string> {
  override controlType = ControlType.Editor;
}
