import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { Appearance } from '../../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { Select } from '@falcon-ng/core';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';
import { SelectHtmlComponent } from './select-html/select-html.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: true,
  imports: [
    FalconTailwindModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
    SelectHtmlComponent,
  ],
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
            { key: 'bulbasaur-0', value: 'Bulbasaur' },
            { key: 'oddish-1', value: 'Oddish' },
            {
              key: 'bellsprout-2',
              value: 'Bellsprout',
            },
          ],
          appearance: Appearance.Fill as MatFormFieldAppearance,
        }),
        new Select({
          formControlName: 'multipleMatSelect',
          label: 'Multiple selection',
          options: [
            {
              key: 'Extra-cheese',
              value: 'Extra cheese',
            },
            { key: 'Bellsprout', value: 'Bellsprout' },
            { key: 'Mushroom', value: 'Mushroom' },
            {
              key: 'Onion',
              value: 'Onion',
              disabled: true,
            },
            { key: 'Pepperoni', value: 'Pepperoni' },
            { key: 'Sausage', value: 'Sausage' },
            {
              key: 'Tomato',
              value: 'Tomato',
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
              key: 'Extra-cheese',
              value: 'Extra cheese',
            },
            { key: 'Bellsprout', value: 'Bellsprout' },
            { key: 'Mushroom', value: 'Mushroom' },
            {
              key: 'Onion',
              value: 'Onion',
              disabled: true,
            },
            { key: 'Pepperoni', value: 'Pepperoni' },
            { key: 'Sausage', value: 'Sausage' },
            {
              key: 'Tomato',
              value: 'Tomato',
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
              key: 'Extra cheese',
            },
            { value: 'Bellsprout', key: 'Bellsprout' },
            { value: 'Mushroom', key: 'Mushroom' },
            {
              value: 'Onion',
              key: 'Onion',
            },
            { value: 'Pepperoni', key: 'Pepperoni' },
            { value: 'Sausage', key: 'Sausage' },
            {
              value: 'Tomato',
              key: 'Tomato',
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
