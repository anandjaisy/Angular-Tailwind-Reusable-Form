import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { Observable, of } from 'rxjs';
import { Textbox } from '../../../projects/falcon-ng/tailwind/src/lib/control-type/textbox';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import {FalconCoreModule} from "../../../projects/falcon-ng/tailwind/src/lib/falcon-core.module";
import {HighlightModule} from "ngx-highlightjs";
import {CodeGeneratorComponent} from "../common/component/code-generator/code-generator.component";
import {InputPrefixSuffixComponent} from "./input-prefix-suffix/input-prefix-suffix.component";
import {InputHintComponent} from "./input-hint/input-hint.component";
import {InputFloatingLabelComponent} from "./input-floating-label/input-floating-label.component";
import {InputErrorComponent} from "./input-error/input-error.component";
import {CodeButtonComponent} from "../common/component/code-button/code-button.component";

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  standalone: true,
  imports:[FalconCoreModule,CodeGeneratorComponent,HighlightModule,InputPrefixSuffixComponent,InputHintComponent,InputFloatingLabelComponent,InputErrorComponent,CodeButtonComponent]
})
export class TextboxComponent
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
        new Textbox({
          formControlName: 'firstName',
          label: 'First name',
          value: 'Bombasto',
          order: 1,
        }),
        new Textbox({
          formControlName: 'lastName',
          label: 'Last name',
          value: 'Bombasto',
          order: 1,
        }),
        new Textbox({
          formControlName: 'lastName',
          label: 'Last name',
          value: 'Bombasto',
          order: 1,
        }),
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.FormFieldAppearanceVariant_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.FormFieldAppearanceVariant_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
