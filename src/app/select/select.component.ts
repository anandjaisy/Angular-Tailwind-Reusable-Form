import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import {Observable, of} from 'rxjs';
import {AngularCodeTemplateViewModel} from '../common/angularCodeTemplateViewModel';
import {Appearance} from '../../../projects/falcon-ng/tailwind/src/lib/model/enum';
import {Select} from '../../../projects/falcon-ng/tailwind/src/lib/control-type/select';
import {AngularCodeTemplate} from '../common/angularCodeTemplate';
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent
  extends BaseFormComponent<string>
  implements OnInit {
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
            {key: 'bulbasaur-0', value: 'Bulbasaur'},
            {key: 'oddish-1', value: 'Oddish'},
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
            {key: 'Bellsprout', value: 'Bellsprout'},
            {key: 'Mushroom', value: 'Mushroom'},
            {
              key: 'Onion',
              value: 'Onion',
              disabled: true,
            },
            {key: 'Pepperoni', value: 'Pepperoni'},
            {key: 'Sausage', value: 'Sausage'},
            {
              key: 'Tomato',
              value: 'Tomato',
              disabled: false,
            },
          ],
          appearance: Appearance.Outline as MatFormFieldAppearance,
          selectProperty: {multiple: true},
        }),
        new Select({
          formControlName: 'DisableSelectComponent',
          label: 'Disable select component',
          options: [
            {
              key: 'Extra-cheese',
              value: 'Extra cheese',
            },
            {key: 'Bellsprout', value: 'Bellsprout'},
            {key: 'Mushroom', value: 'Mushroom'},
            {
              key: 'Onion',
              value: 'Onion',
              disabled: true,
            },
            {key: 'Pepperoni', value: 'Pepperoni'},
            {key: 'Sausage', value: 'Sausage'},
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
            {value: 'Bellsprout', key: 'Bellsprout'},
            {value: 'Mushroom', key: 'Mushroom'},
            {
              value: 'Onion',
              key: 'Onion',
            },
            {value: 'Pepperoni', key: 'Pepperoni'},
            {value: 'Sausage', key: 'Sausage'},
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
