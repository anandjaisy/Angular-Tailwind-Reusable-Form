import {ControlType} from './model/enum';
import {IValidator} from "./model/ivalidator";
import {FloatLabelType, MatFormFieldAppearance} from "@angular/material/form-field";
import {IMatHint, ISuffixPrefixConfig} from "./model/interface";

/**
 * @description
 * Class use for setting the layout.
 * @usageNotes
 * ```ts
 *       new Dropdown({
 *        key: 'brave',
 *       label: 'Bravery Rating',
 *       options: [
 *         {key: 'solid',  value: 'Solid'},
 *         {key: 'great',  value: 'Great'},
 *         {key: 'good',   value: 'Good'},
 *         {key: 'unproven', value: 'Unproven'}
 *       ],
 *       order: 3
 * }),
 ** ```
 */
export interface Layout<T> {
  class?: string
  baseControls: BaseControl<T>[]
}

/**
 * @description
 * Class use for setting the control properties.
 * @usageNotes
 * ```ts
 *       new Dropdown({
 *        key: 'brave',
 *       label: 'Bravery Rating',
 *       options: [
 *         {key: 'solid',  value: 'Solid'},
 *         {key: 'great',  value: 'Great'},
 *         {key: 'good',   value: 'Good'},
 *         {key: 'unproven', value: 'Unproven'}
 *       ],
 *       order: 3
 * }),
 ** ```
 */
export class BaseControl<T> {
  value: T | undefined;
  key: string;
  label: string;
  order: number;
  controlType: ControlType;
  type: string;
  disabled: boolean;
  options: { key: string; value: string }[];
  validations: IValidator[];
  appearance: MatFormFieldAppearance;
  class: string
  style: string
  placeHolder: string
  floatLabel: FloatLabelType
  hint: IMatHint;
  suffix: ISuffixPrefixConfig;
  prefix: ISuffixPrefixConfig;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      order?: number;
      controlType?: ControlType;
      type?: string;
      disabled?: boolean;
      options?: { key: string; value: string }[];
      validations?: IValidator[];
      appearance?: MatFormFieldAppearance;
      class?: string;
      style?: string;
      placeHolder?: string;
      floatLabel?: FloatLabelType;
      hint?: IMatHint;
      suffix?: ISuffixPrefixConfig;
      prefix?: ISuffixPrefixConfig;
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || ControlType.Button;
    this.type = options.type || '';
    this.disabled = options.disabled || false;
    this.options = options.options || [];
    this.validations = options.validations || [];
    this.appearance = options.appearance || 'outline';
    this.class = options.class || '';
    this.style = options.style || '';
    this.placeHolder = options.placeHolder || '';
    this.floatLabel = options.floatLabel || 'auto';
    this.hint = options.hint || {} as IMatHint
    this.prefix = options.prefix || {} as ISuffixPrefixConfig
    this.suffix = options.suffix || {} as ISuffixPrefixConfig
  }
}
