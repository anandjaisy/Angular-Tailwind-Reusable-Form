import {Component, OnInit} from '@angular/core';
import {AngularCodeTemplate} from "../../common/angularCodeTemplate";
import {Observable, of} from "rxjs";
import {BaseFormComponent} from "../../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {AngularCodeTemplateViewModel} from "../../common/angularCodeTemplateViewModel";
import {Chip} from "../../../../projects/falcon-ng/tailwind/src/lib/control-type/Chip";
import {Appearance, InputTypes} from "../../../../projects/falcon-ng/tailwind/src/lib/model/enum";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  selector: 'app-chips-withinput',
  templateUrl: './chips-withinput.component.html',
  styleUrls: ['./chips-withinput.component.scss']
})
export class ChipsWithinputComponent extends BaseFormComponent<string>
  implements OnInit {
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  public codeGeneratorEnable: boolean = false;

  constructor() {
    super();
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'p-5',
      baseControls: [
        new Chip({
          formControlName: 'chipsWithAutoComplete',
          label: 'Basic Auto complete',
          appearance: Appearance.Outline as MatFormFieldAppearance,
          options: [
            {value: 'Sydney', key: 'Sydney'},
            {value: 'Melbourne', key: 'Melbourne'},
            {value: 'Brisbane', key: 'Brisbane'},
            {value: 'NewYork', key: 'New York'},
            {value: 'Kathmandu', key: 'Kathmandu'},
          ],
          type: InputTypes.Text,
          chipSelectedOptions: [],
        })
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
    this.controlsConfig.baseControls[0].chipSelectedOptions =
      [{value: 'Kathmandu', viewValue: 'Kathmandu'}];
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Chips_DRAGDROP_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Chips_DRAGDROP_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
