import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { Observable, of } from 'rxjs';
import { DatePicker } from '@falcon-ng/core';
import { Appearance } from '../../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { Validators } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
    imports: [
        FalconTailwindModule,
        CodeGeneratorComponent,
        HighlightModule,
        CodeButtonComponent,
    ]
})
export class DatepickerComponent
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
      class: 'grid grid-cols-3 gap-4',
      baseControls: [
        new DatePicker({
          formControlName: 'legacyBasicDatePicker',
          label: 'Legacy custom icon datepicker',
          appearance: Appearance.Outline,
          placeHolder: 'Legacy Basic datepicker',
          suffix: {
            isIcon: true,
            text: 'keyboard_arrow_down',
          },
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Required Field',
            },
          ],
        }),
        new DatePicker({
          formControlName: 'outlineDatepicker',
          label: 'Outline Basic datepicker',
          appearance: Appearance.Outline,
          placeHolder: 'Outline Basic datepicker',
        }),
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Date_picker_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Date_picker_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
