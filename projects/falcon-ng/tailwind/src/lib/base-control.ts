import {ControlType} from "./model/ControlType";

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
  value: T|undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: ControlType;
  type: string;
  options: {key: string, value: string}[];

  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: ControlType;
    type?: string;
    options?: {key: string, value: string}[];
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || ControlType.Button;
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
