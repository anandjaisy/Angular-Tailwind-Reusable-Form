import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { CustomValidator } from 'src/app/common/validations';
import {BaseFormComponent} from "../../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {Textbox} from "../../../../projects/falcon-ng/tailwind/src/lib/control-type/textbox";
import {Appearance, InputTypes} from "../../../../projects/falcon-ng/tailwind/src/lib/model/enum";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'app-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
})
export class InputErrorComponent
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
      class: "flex justify-start space-x-4",
      baseControls:[
        new Textbox({
          key: 'requiredValidation',
          label: 'Required Validation',
          appearance: Appearance.Fill as MatFormFieldAppearance,
          placeHolder: 'Required Validation *',
          type: InputTypes.Text,
          validations: [{
            name: 'required',
            validator: Validators.required,
            message: 'Required Field',
          }]
        }),
        new Textbox({
          key: 'patternValidation',
          label: 'Pattern Validation',
          appearance: Appearance.Outline as MatFormFieldAppearance,
          placeHolder: 'Pattern Validation *',
          type: InputTypes.Text,
          validations: [{
            name: 'pattern',
            validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
            message: 'Invalid email',
          },]
        }),
        new Textbox({
          key: 'requiredAndPatternValidation',
          label: 'Required & Pattern Validation *',
          appearance: Appearance.Outline as MatFormFieldAppearance,
          placeHolder: 'Required & Pattern Validation *',
          type: InputTypes.Text,
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Required Field',
            },
            {
              name: 'pattern',
              validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
              message: 'Invalid email',
            },
            {
              name: 'cannotContainSpace',
              validator: CustomValidator.cannotContainSpace,
              message: 'can not Contain Space',
            },
          ]
        }),
        new Textbox({
          key: 'customValidation',
          label: 'Custom Validation *',
          appearance: Appearance.Outline as MatFormFieldAppearance,
          placeHolder: 'Custom Validation *',
          type: InputTypes.Text,
          validations: [{
            name: 'cannotContainSpace',
            validator: CustomValidator.cannotContainSpace,
            message: 'can not Contain Space',
          }]
        }),
        ]};
    };

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
      AngularCodeTemplate.FormFieldError_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.FormFieldError_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
