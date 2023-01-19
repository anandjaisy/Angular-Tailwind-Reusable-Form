import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {AngularCodeTemplateViewModel} from '../common/angularCodeTemplateViewModel';
import {Observable, of} from 'rxjs';
import {AutoComplete} from '../../../projects/falcon-ng/tailwind/src/lib/control-type/AutoComplete';
import {Appearance} from "../../../projects/falcon-ng/tailwind/src/lib/model/enum";
import {MatFormFieldAppearance} from "@angular/material/form-field";
import {AngularCodeTemplate} from "../common/angularCodeTemplate";
import {HighlightModule} from "ngx-highlightjs";
import {CodeGeneratorComponent} from "../common/component/code-generator/code-generator.component";
import {FalconCoreModule} from "../../../projects/falcon-ng/tailwind/src/lib/falcon-core.module";
import {CodeButtonComponent} from "../common/component/code-button/code-button.component";

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  standalone: true,
  imports:[FalconCoreModule,CodeGeneratorComponent,HighlightModule,CodeButtonComponent]
})
export class AutoCompleteComponent
  extends BaseFormComponent<string>
  implements OnInit {
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
        new AutoComplete({
          formControlName: 'basicAutoComplete',
          label: 'Basic Auto complete',
          options: [
            {value: 'Sydney', key: 'Sydney'},
            {value: 'Melbourne', key: 'Melbourne'},
            {value: 'Brisbane', key: 'Brisbane'},
            {value: 'NewYork', key: 'New York'},
            {value: 'Kathmandu', key: 'Kathmandu'},
          ],
          appearance: Appearance.Outline as MatFormFieldAppearance,
        }),
        new AutoComplete({
          formControlName: 'OutlineAutoComplete',
          label: 'Outline Auto complete',
          options: [
            {value: 'Sydney', key: 'Sydney'},
            {value: 'Melbourne', key: 'Melbourne'},
            {value: 'Brisbane', key: 'Brisbane'},
            {value: 'NewYork', key: 'New York'},
            {value: 'Kathmandu', key: 'Kathmandu'},
          ],
          appearance: Appearance.Outline as MatFormFieldAppearance,
        }),
        new AutoComplete({
          formControlName: 'plaininputautocomplete',
          label: 'Plain input autocomplete',
          placeHolder:'Plain input autocomplete',
          options: [
            {
              value: 'Extra-cheese',
              viewValue: 'Extra cheese',
            },
            {value: 'Bellsprout', key: 'Bellsprout'},
            {value: 'Mushroom', key: 'Mushroom'},
            {value: 'Onion', key: 'Onion'},
            {value: 'Pepperoni', key: 'Pepperoni'},
            {value: 'Sausage', key: 'Sausage'},
            {value: 'Tomato', key: 'Tomato'},
          ],
          appearance: Appearance.Plain as string,
        }),
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }


  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
    AngularCodeTemplate.Auto_Complete_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
    AngularCodeTemplate.Auto_Complete_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
