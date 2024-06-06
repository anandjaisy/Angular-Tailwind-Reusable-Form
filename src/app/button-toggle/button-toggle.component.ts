import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { Observable, of } from 'rxjs';
import { Appearance } from '../../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { ButtonToggle } from '@falcon-ng/core';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  standalone: true,
  imports: [
    FalconTailwindModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
  ],
})
export class ButtonToggleComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  response!: string;
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor() {
    super();
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'grid grid-cols-2 gap-4',
      baseControls: [
        new ButtonToggle({
          formControlName: 'basicButtonToggle',
          options: [
            { value: 'Bold', viewValue: 'Bold' },
            { value: 'Italic', viewValue: 'Italic' },
            { value: 'Underline', viewValue: 'Underline' },
          ],
        }),
        new ButtonToggle({
          label: 'Multiple selection',
          formControlName: 'legecyButtonToggle',
          appearance: Appearance.Fill,
          options: [
            {
              value: 'Extra-cheese',
              viewValue: 'Extra cheese',
            },
            { value: 'Bellsprout', viewValue: 'Bellsprout' },
            { value: 'Mushroom', viewValue: 'Mushroom' },
            { value: 'Onion', viewValue: 'Onion' },
            { value: 'Pepperoni', viewValue: 'Pepperoni' },
            { value: 'Sausage', viewValue: 'Sausage' },
            { value: 'Tomato', viewValue: 'Tomato' },
          ],
        }),
      ],
    };
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Button_Toggle_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Button_Toggle_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
