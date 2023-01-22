import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { BaseFormComponent } from '../../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import {
  Appearance,
  InputTypes,
} from '../../../../projects/falcon-ng/tailwind/src/lib/model/enum';
import { Textbox } from '../../../../projects/falcon-ng/tailwind/src/lib/control-type/Textbox';
import { Validators } from '@angular/forms';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../../common/component/code-generator/code-generator.component';
import { FalconCoreModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-core.module';
import { CodeButtonComponent } from '../../common/component/code-button/code-button.component';

@Component({
  selector: 'app-input-hint',
  templateUrl: './input-hint.component.html',
  styleUrls: ['./input-hint.component.scss'],
  standalone: true,
  imports: [
    FalconCoreModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
  ],
})
export class InputHintComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor() {
    super();
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'flex justify-end space-x-4',
      baseControls: [
        new Textbox({
          formControlName: 'legacyFormFieldHint',
          label: 'Legacy form field HINT',
          appearance: Appearance.Fill as MatFormFieldAppearance,
          placeHolder: 'Form field hint',
          hint: {
            text: 'Legacy form field HINT',
            isIcon: false,
            link: {
              routerLink: '../hello',
              queryParams: 'value',
              isLink: true,
            },
          },
        }),
        new Textbox({
          formControlName: 'requiredValidation',
          label: 'Outline form field HINT',
          appearance: Appearance.Fill as MatFormFieldAppearance,
          placeHolder: 'Outline form field HINT',
          hint: {
            text: 'Outline form field HINT',
            isIcon: false,
          },
        }),
      ],
    };
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  protected getDatasource(): Observable<any> {
    return of();
  }

  protected submitDataSource(model: any): Observable<any> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.FormFieldHint_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.FormFieldHint_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
