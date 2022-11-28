/**
* @description
* Enum use for setting the form control Types.
* @usageNotes
* ```ts
*      export class Textbox extends BaseControl<string>{
*         override controlType = ControlType.Select;
*      }
* ```
*/
export const enum ControlType {
  TextBox = 0,
  TextArea = 1,
  Select = 2,
  DatePicker = 3,
  Radio = 4,
  Checkbox = 5,
  Button = 6,
  SlideToggle = 7,
  Slider = 8,
  ButtonToggle = 9,
  AutoComplete = 10,
  Chip = 11,
  Editor = 12,
  Divider = 13,
}