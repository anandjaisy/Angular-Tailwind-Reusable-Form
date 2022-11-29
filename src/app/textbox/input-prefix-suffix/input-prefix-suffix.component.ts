import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AngularCodeTemplateViewModel} from 'src/app/common/angularCodeTemplateViewModel';
import {AngularCodeTemplate} from 'src/app/common/angularCodeTemplate';
import {BaseFormComponent} from "../../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {Textbox} from "../../../../projects/falcon-ng/tailwind/src/lib/control-type/textbox";
import {Appearance} from "../../../../projects/falcon-ng/tailwind/src/lib/model/enum";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'app-input-prefix-suffix',
  templateUrl: './input-prefix-suffix.component.html',
  styleUrls: ['./input-prefix-suffix.component.scss'],
})
export class InputPrefixSuffixComponent
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
      class: "flex justify-between",
      baseControls: [
        new Textbox({
          key: 'prefixIcon',
          label: 'Prefix Icon',
          appearance: Appearance.Fill as MatFormFieldAppearance,
          placeHolder: 'Prefix Icon',
          prefix: {
            isIcon: true,
            text: 'sentiment_satisfied_alt',
          }
        }),
        new Textbox({
          key: 'suffixNumber',
          label: 'Suffix Number',
          appearance: Appearance.Fill as MatFormFieldAppearance,
          placeHolder: 'Suffix Icon',
          suffix: {
            isIcon: false,
            text: '.00',
          }
        }),
        new Textbox({
          key: 'prefixandSuffixIcon',
          label: 'Prefix & Suffix icon',
          appearance: Appearance.Outline as MatFormFieldAppearance,
          placeHolder: 'Prefix & Suffix icon',
          prefix: {
            isIcon: true,
            text: 'euro',
            toolTipText: 'Euro dollar',
          },
          suffix: {
            isIcon: true,
            text: 'done',
            toolTipText: 'Done icon',
          },
        })
      ]
    }
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
      AngularCodeTemplate.FormFieldPrefixSuffix_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.FormFieldPrefixSuffix_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
