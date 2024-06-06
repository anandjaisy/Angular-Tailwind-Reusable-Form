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

/**
 * @description
 * Enum use for Appearance of the control.
 * @usageNotes
 * Before and After property should be only use for Checkbox and Radio button
 * ```ts
 *       if (componentType == ComponentType.Radio && componentType == ComponentType.Checkbox) THEN
 *          only use Appearance Before and After
 * ```
 */
export const enum Appearance {
  /**
   * @usageNotes Should be only use for input, textbox, and select
   */
  Plain = 'plain',
  Legacy = 'legacy',
  Standard = 'standard',
  Fill = 'fill',
  Outline = 'outline',
  /**
   * @usageNotes Should be only use for label position
   */
  Before = 'before',
  After = 'after',
  /**
   * @usageNotes Should be only use for select
   */
  Multiple = 'true',

  /**
   * @usageNotes Should be only use for Buttom
   */
  Basic = 0,
  Raised = 1,
  Stroked = 2,
  Flat = 3,
  Icon = 4,
  FAB = 5,
  MiniFAB = 6,
  routeLink = 7,
  routeHref = 8,
}

/**
 * @description
 * Enum use for setting the attribute Types.
 * @usageNotes
 * ```ts
 *      componentProperty: {
 *        attrType: InputTypes.Text
 *      }
 * ```
 */
export const enum InputTypes {
  Color = 'color',
  Date = 'date',
  DatetimeLocal = 'datetime-local',
  Email = 'email',
  Month = 'month',
  Number = 'number',
  Password = 'password',
  Search = 'search',
  Tel = 'tel',
  Text = 'text',
  Time = 'time',
  Url = 'url',
  Week = 'week',
  /**
   * @usageNotes Should be only use for Buttom
   */
  Button = 'button',
  Submit = 'submit',
  DragDrop = 'dragDrop',
}

/**
 * @description
 * Enum use for setting HTTP method.
 * @usageNotes
 * ```ts
 *      this.genericHttpClientService.Delete(this.deleteUserUrl).subscribe(item => {}, error => {});
 * ```
 */
export const enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

/**
 * @description
 * Enum use for Table actions
 */
export const enum TableAction {
  View,
  Edit,
  Delete,
  RightArrow,
}

/**
 * @description
 * Enum use for setting the Floating label.
 * @usageNotes
 * ```ts
 *      componentProperty: {
 *        floatLabel: Floatinglabel.Always
 *      }
 * ```
 */
export const enum Floatinglabel {
  Auto = 'auto',
  Always = 'always',
}

export const enum LoggingLevel {
  None = 'None',
  Verbose = 'Verbose',
  Info = 'Info',
  Warnings = 'Warnings',
  Errors = 'Errors'
}