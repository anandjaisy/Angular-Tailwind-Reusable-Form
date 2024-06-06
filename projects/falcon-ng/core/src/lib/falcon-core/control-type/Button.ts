import {BaseControl} from "../model/base-control";
import {Control} from "../model/enum";

export class Button extends BaseControl<string> {
  override controlType = Control.Button;
}
