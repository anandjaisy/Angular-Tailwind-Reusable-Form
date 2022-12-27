import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {AngularCodeTemplateViewModel} from "../common/angularCodeTemplateViewModel";
import {Observable, of} from "rxjs";
import {AngularCodeTemplate} from "../common/angularCodeTemplate";
import {Textarea} from "../../../projects/falcon-ng/tailwind/src/lib/control-type/textarea";
import {Appearance} from "../../../projects/falcon-ng/tailwind/src/lib/model/enum";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent extends BaseFormComponent<string> implements OnInit {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel = new AngularCodeTemplateViewModel();

  constructor() {
    super();
    this.defineForm();
  }

  protected defineForm(): void {

    this.controlsConfig = {
      class: "grid grid-cols-3 gap-4",
      baseControls: [
        new Textarea({
          key: 'textAreaAutoSizeEnable',
          label: 'Text Area with Auto Size Enable',
          appearance: Appearance.Outline,
          placeHolder: 'Text Area with Auto Size Enable',
          textAreaProperty: {
            cdkTextareaAutosize: true,
            cdkAutosizeMinRows: 1,
            cdkAutosizeMaxRows: 5,
          },
          suffix: {
            isIcon: true,
            text: 'lock_open',
          },
        }),
        new Textarea({
          key: 'textAreaStaticRowColumn',
          label: 'Text Area with static row and column',
          appearance: Appearance.Fill,
          placeHolder: 'Text Area with static row and column',
          textAreaProperty: {
            rows: 10,
            cols: 40,
          },
          suffix: {
            isIcon: true,
            text: 'power_settings_new',
          },
        })
      ]
    };
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.FormTextArea_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.FormTextArea_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
