import { Component } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { Observable, of } from 'rxjs';
import { Chip } from '../../../projects/falcon-ng/tailwind/src/lib/control-type/Chip';
import {
  Appearance,
  InputTypes,
} from '../../../projects/falcon-ng/tailwind/src/lib/model/enum';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconCoreModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-core.module';
import { ChipsWithinputComponent } from './chips-withinput/chips-withinput.component';
import { ChipsDragDropComponent } from './chips-drag-drop/chips-drag-drop.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  standalone: true,
  imports: [
    FalconCoreModule,
    CodeGeneratorComponent,
    HighlightModule,
    ChipsWithinputComponent,
    ChipsDragDropComponent,
    ChipsAutocompleteComponent,
    CodeButtonComponent,
  ],
})
export class ChipsComponent {
  public codeGeneratorEnable: boolean = false;
  htmlChipConfig = {
    class: 'flex justify-center',
    baseControls: [
      new Chip({
        formControlName: 'chipsWithAutoComplete',
        label: 'Basic Auto complete',
        appearance: Appearance.Outline as MatFormFieldAppearance,
        options: [
          { value: 'Sydney', key: 'Sydney' },
          { value: 'Melbourne', key: 'Melbourne' },
          { value: 'Brisbane', key: 'Brisbane' },
          { value: 'NewYork', key: 'New York' },
          { value: 'Kathmandu', key: 'Kathmandu' },
        ],
        type: InputTypes.Text,
        chipSelectedOptions: [],
        formArray: [],
      }),
    ],
  };
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor() {}

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Chips_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Chips_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

  chipsAutoCompleteClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Chips_AUTO_COMPLETE_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Chips_AUTO_COMPLETE_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

  chipsWithInputClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Chips_INPUT_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Chips_INPUT_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }

  chipsDragDropClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Chips_DRAGDROP_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Chips_DRAGDROP_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
