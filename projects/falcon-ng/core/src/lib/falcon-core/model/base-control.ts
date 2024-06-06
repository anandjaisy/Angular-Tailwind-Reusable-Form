import {ControlType} from './enum';
import {IValidator} from './ivalidator';
import {
  FloatLabelType,
  MatFormFieldAppearance,
} from '@angular/material/form-field';
import { ThemePalette } from '@angular/material/core';
import {
  IComponentEvent,
  IMatHint,
  IOptions,
  ISelectOptions,
  ISliderProperty,
  ISuffixPrefixConfig, ITextAreaProperty,
} from './interface';

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
  color: ThemePalette;
  sliderProperty: ISliderProperty;
  chipSelectedOptions: IOptions[] | any;
  editorProperty: any;
  formArray: BaseControl<T>[] | undefined;
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
      color?: ThemePalette;
      sliderProperty?: ISliderProperty;
      chipSelectedOptions?: IOptions[] | any;
      editorProperty?: any;
      formArray?: BaseControl<T>[];
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
    this.color = options.color || undefined;
    this.sliderProperty = options.sliderProperty || {};
    this.chipSelectedOptions = options.chipSelectedOptions || {};
    this.editorProperty = options.editorProperty || {};
    this.formArray = options.formArray || undefined
  }
}
