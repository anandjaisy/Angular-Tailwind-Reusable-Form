import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { Appearance } from '../../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { Radio } from '@falcon-ng/core';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    imports: [
        FalconTailwindModule,
        CodeGeneratorComponent,
        HighlightModule,
        CodeButtonComponent,
    ]
})
export class RadioComponent
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

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'grid grid-cols-2 gap-4',
      baseControls: [
        new Radio({
          formControlName: 'basicRadios',
          label:
            'Positon BEFORE (css=radio-group-column) (with prefilled value)',
          options: [
            { viewValue: 'Option 1', value: 'Option 1' },
            { viewValue: 'Option 2', value: 'Option 2' },
          ],
          appearance: Appearance.Before,
          class: 'radio-group-column',
        }),
        new Radio({
          formControlName: 'radiosWithLabel',
          label:
            'Pick your favorite season (with positon AFTER & css=radio-group-column)',
          options: [
            { viewValue: 'Winter', value: 'Winter' },
            {
              viewValue: 'Spring',
              value: 'Spring',
            },
            { viewValue: 'Summer', value: 'Summer' },
            { viewValue: 'Autumn', value: 'Autumn' },
          ],
          appearance: Appearance.After,
          class: 'radio-group-column',
        }),
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Radios_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Radio_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
