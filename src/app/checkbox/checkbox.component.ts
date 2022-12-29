import { Component, OnInit } from '@angular/core';
import { CheckBox } from 'projects/falcon-ng/tailwind/src/lib/control-type/CheckBox';
import {
  Appearance,
  BaseFormComponent,
} from 'projects/falcon-ng/tailwind/src/public-api';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
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
          appearance: Appearance.Outline,
          value: true,
        }),
        new CheckBox({
          formControlName: 'textAreaStaticRowColumn',
          label: 'Basic checkboxes AFTER',
          appearance: Appearance.Fill,
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
