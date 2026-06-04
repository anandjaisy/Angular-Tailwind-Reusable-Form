import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseFormComponent } from '../../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import {
  Appearance,
  InputTypes,
} from '../../../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { Textbox } from '@falcon-ng/core';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeButtonComponent } from '../../common/component/code-button/code-button.component';
import { AngularCodeTemplateViewModel } from '../../common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from '../../common/angularCodeTemplate';

@Component({
  selector: 'app-input-hint',
  templateUrl: './input-hint.component.html',
  styleUrls: ['./input-hint.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FalconTailwindModule, CodeGeneratorComponent, HighlightModule, CodeButtonComponent],
})
export class InputHintComponent extends BaseFormComponent<any> implements OnInit {
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
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.FormFieldHint_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.FormFieldHint_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
