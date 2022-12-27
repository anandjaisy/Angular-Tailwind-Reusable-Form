import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AngularCodeTemplateViewModel} from 'src/app/common/angularCodeTemplateViewModel';
import {AngularCodeTemplate} from 'src/app/common/angularCodeTemplate';
import {BaseFormComponent} from "../../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {Appearance, Floatinglabel, InputTypes} from "../../../../projects/falcon-ng/tailwind/src/lib/model/enum";
import {Textbox} from "../../../../projects/falcon-ng/tailwind/src/lib/control-type/textbox";

@Component({
  selector: 'app-input-floating-label',
  templateUrl: './input-floating-label.component.html',
  styleUrls: ['./input-floating-label.component.scss'],
})
export class InputFloatingLabelComponent
  extends BaseFormComponent<any>
  implements OnInit {
  codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor() {
    super();
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: "flex justify-center space-x-4",
      baseControls: [new Textbox({
        key: 'floatingLabelAlways',
        label: 'Floating label ALWAYS',
        appearance: Appearance.Fill as MatFormFieldAppearance,
        placeHolder: 'Floating label ALWAYS'
      }),
        new Textbox({
          key: 'floatingLabelAuto',
          label: 'Floating label AUTO',
          appearance: Appearance.Fill as MatFormFieldAppearance,
          placeHolder: 'Floating label ALWAYS',
          floatLabel: Floatinglabel.Auto,
        }),]
    }
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
      AngularCodeTemplate.FormFieldFloatingLabel_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.FormFieldFloatingLabel_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
