import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {Observable, of} from "rxjs";
import {AngularCodeTemplate} from "../../common/angularCodeTemplate";
import {AngularCodeTemplateViewModel} from "../../common/angularCodeTemplateViewModel";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {Appearance, InputTypes} from "../../../../projects/falcon-ng/tailwind/src/lib/model/enum";
import {Chip} from "../../../../projects/falcon-ng/tailwind/src/lib/control-type/Chip";

@Component({
  selector: 'app-chips-autocomplete',
  templateUrl: './chips-autocomplete.component.html',
  styleUrls: ['./chips-autocomplete.component.scss']
})
export class ChipsAutocompleteComponent extends BaseFormComponent<string>
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
      class: '',
      baseControls: [
        new Chip({
          formControlName: 'chipsWithAutoComplete',
          label: 'Basic Auto complete',
          appearance: Appearance.Outline as MatFormFieldAppearance,
          options: [
            {value: 'Sydney', viewValue: 'Sydney'},
            {value: 'Melbourne', viewValue: 'Melbourne'},
            {value: 'Brisbane', viewValue: 'Brisbane'},
            {value: 'NewYork', viewValue: 'New York'},
            {value: 'Kathmandu', viewValue: 'Kathmandu'},
          ],
          type: InputTypes.Search,
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
      AngularCodeTemplate.Chips_AUTO_COMPLETE_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Chips_AUTO_COMPLETE_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

}
