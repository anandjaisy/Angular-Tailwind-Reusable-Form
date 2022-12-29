import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { Appearance } from '../../../projects/falcon-ng/tailwind/src/lib/model/enum';
import { Select } from '../../../projects/falcon-ng/tailwind/src/lib/control-type/select';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { Textbox } from '../../../projects/falcon-ng/tailwind/src/lib/control-type/textbox';
import { DatePicker } from '../../../projects/falcon-ng/tailwind/src/lib/control-type/DatePicker';
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent
  extends BaseFormComponent<string>
  implements OnInit
{
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor() {
    super();
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'grid grid-cols-4 gap-4',
      baseControls: [
        new Select({
          formControlName: 'basicMatSelect',
          label: 'Basic mat-select',
          options: [
            { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
            { value: 'oddish-1', viewValue: 'Oddish' },
            {
              value: 'bellsprout-2',
              viewValue: 'Bellsprout',
            },
          ],
          appearance: Appearance.Fill as MatFormFieldAppearance,
        }),
        new Select({
          formControlName: 'multipleMatSelect',
          label: 'Multiple selection',
          options: [
            {
              value: 'Extra-cheese',
              viewValue: 'Extra cheese',
            },
            { value: 'Bellsprout', viewValue: 'Bellsprout' },
            { value: 'Mushroom', viewValue: 'Mushroom' },
            {
              value: 'Onion',
              viewValue: 'Onion',
              disabled: true,
            },
            { value: 'Pepperoni', viewValue: 'Pepperoni' },
            { value: 'Sausage', viewValue: 'Sausage' },
            {
              value: 'Tomato',
              viewValue: 'Tomato',
              disabled: false,
            },
          ],
          appearance: Appearance.Outline as MatFormFieldAppearance,
          selectProperty: { multiple: true },
        }),
        new Select({
          formControlName: 'DisableSelectComponent',
          label: 'Disable select component',
          options: [
            {
              value: 'Extra-cheese',
              viewValue: 'Extra cheese',
            },
            { value: 'Bellsprout', viewValue: 'Bellsprout' },
            { value: 'Mushroom', viewValue: 'Mushroom' },
            {
              value: 'Onion',
              viewValue: 'Onion',
              disabled: true,
            },
            { value: 'Pepperoni', viewValue: 'Pepperoni' },
            { value: 'Sausage', viewValue: 'Sausage' },
            {
              value: 'Tomato',
              viewValue: 'Tomato',
              disabled: false,
            },
          ],
          appearance: Appearance.Outline as MatFormFieldAppearance,
        }),
        new Select({
          formControlName: 'Default value in component',
          label: 'DefaultValueInComponent',
          value: 'Onion',
          options: [
            {
              value: 'Extra-cheese',
              viewValue: 'Extra cheese',
            },
            { value: 'Bellsprout', viewValue: 'Bellsprout' },
            { value: 'Mushroom', viewValue: 'Mushroom' },
            {
              value: 'Onion',
              viewValue: 'Onion',
            },
            { value: 'Pepperoni', viewValue: 'Pepperoni' },
            { value: 'Sausage', viewValue: 'Sausage' },
            {
              value: 'Tomato',
              viewValue: 'Tomato',
              disabled: false,
            },
          ],
          appearance: Appearance.Outline as MatFormFieldAppearance,
        }),
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
    console.log(this.controlsConfig);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.FormFieldAppearanceVariant_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.FormFieldAppearanceVariant_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
