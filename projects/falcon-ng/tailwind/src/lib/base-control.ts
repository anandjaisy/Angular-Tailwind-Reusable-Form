import {ControlType} from './model/enum';
import {IValidator} from "./model/ivalidator";

/**
 * @description
 * Class use for setting the control properties.
 * @usageNotes
 * ```ts
 *       new Dropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
}),
 ** ```
 */
export class BaseControl<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: ControlType;
  type: string;
  disabled: boolean;
  options: { key: string; value: string }[];
  validations?: IValidator[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: ControlType;
      type?: string;
      disabled?: boolean;
      options?: { key: string; value: string }[];
      validations?: IValidator[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || ControlType.Button;
    this.type = options.type || '';
    this.disabled = options.disabled || false;
    this.options = options.options || [];
    this.validations = options.validations || [];
  }
}
