import {BaseControl} from "../base-control";
import {ControlType} from "../model/enum";

export class Button extends BaseControl<string> {
  override controlType = ControlType.Button;
}