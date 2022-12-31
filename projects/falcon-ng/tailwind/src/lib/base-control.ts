import { ControlType } from './model/enum';
import { IValidator } from './model/ivalidator';
import {
  FloatLabelType,
  MatFormFieldAppearance,
} from '@angular/material/form-field';
import {
  IComponentEvent,
  IMatHint,
  IOptions,
  ISelectOptions, ISliderProperty,
  ISuffixPrefixConfig,
  ITextAreaProperty,
} from './model/interface';

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
  class?: string;
  baseControls: BaseControl<T>[];
}

/**
 * @description
 * Class use for setting the control properties.
 * @usageNotes
 * ```ts
 *       new Dropdown({
 *        formControlName: 'brave',
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
  formControlName: string;
  label: string;
  labelPosition: any;
  order: number;
  controlType: ControlType;
  type: string;
  disabled: boolean;
  options: IOptions[] | any;
  validations: IValidator[];
  appearance: MatFormFieldAppearance | any;
  class: string;
  style: { [klass: string]: any };
  placeHolder: string;
  floatLabel: FloatLabelType;
  hint: IMatHint;
  suffix: ISuffixPrefixConfig;
  prefix: ISuffixPrefixConfig;
  textAreaProperty: ITextAreaProperty;
  event: IComponentEvent<T>;
  selectProperty: ISelectOptions;
  color: string;
  sliderProperty: ISliderProperty;
  chipSelectedOptions: IOptions[] | any;
  constructor(
    options: {
      value?: T;
      formControlName?: string;
      label?: string;
      labelPosition?: any;
      order?: number;
      controlType?: ControlType;
      type?: string;
      disabled?: boolean;
      options?: IOptions[] | any;
      validations?: IValidator[];
      appearance?: MatFormFieldAppearance | any;
      class?: string;
      style?: { [klass: string]: any };
      placeHolder?: string;
      floatLabel?: FloatLabelType;
      hint?: IMatHint;
      suffix?: ISuffixPrefixConfig;
      prefix?: ISuffixPrefixConfig;
      textAreaProperty?: ITextAreaProperty;
      event?: IComponentEvent<T>;
      selectProperty?: ISelectOptions;
      color?: string;
      sliderProperty?: ISliderProperty;
      chipSelectedOptions?: IOptions[] | any;
    } = {}
  ) {
    this.value = options.value;
    this.formControlName = options.formControlName || '';
    this.label = options.label || '';
    this.labelPosition = options.labelPosition || 'before' || 'after';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || ControlType.Button;
    this.type = options.type || '';
    this.disabled = options.disabled || false;
    this.options = options.options || [];
    this.validations = options.validations || [];
    this.appearance = options.appearance || 'outline';
    this.class = options.class || '';
    this.style = options.style || {};
    this.placeHolder = options.placeHolder || '';
    this.floatLabel = options.floatLabel || 'auto';
    this.hint = options.hint || ({} as IMatHint);
    this.prefix = options.prefix || ({} as ISuffixPrefixConfig);
    this.suffix = options.suffix || ({} as ISuffixPrefixConfig);
    this.textAreaProperty =
      options.textAreaProperty || ({} as ITextAreaProperty);
    this.event = options.event || {};
    this.selectProperty = options.selectProperty || {};
    this.color = options.color || '';
    this.sliderProperty = options.sliderProperty || {};
    this.chipSelectedOptions = options.chipSelectedOptions || {};
  }
}
