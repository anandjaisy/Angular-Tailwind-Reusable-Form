import { Component, OnInit } from '@angular/core';
import {
  BaseFormComponent,
  FalconTailwindModule,
} from 'projects/falcon-ng/tailwind/src/public-api';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';
import { Appearance, CheckBox } from '@falcon-ng/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    imports: [
        FalconTailwindModule,
        CodeGeneratorComponent,
        HighlightModule,
        CodeButtonComponent,
    ]
})
export class CheckboxComponent
  extends BaseFormComponent<any>
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
      class: 'grid grid-cols-3 gap-4',
      baseControls: [
        new CheckBox({
          formControlName: 'textAreaAutoSizeEnable',
          label: 'Basic checkboxes BEFORE (with checked)',
          appearance: Appearance.Outline as MatFormFieldAppearance,
          value: true,
        }),
        new CheckBox({
          formControlName: 'textAreaStaticRowColumn',
          label: 'Basic checkboxes AFTER',
          appearance: Appearance.Fill as MatFormFieldAppearance,
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
      AngularCodeTemplate.CheckBox_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.CheckBox_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
