import { Component, OnInit } from '@angular/core';
import { Appearance } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { Select } from '@falcon-ng/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { HighlightModule } from 'ngx-highlightjs';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeGeneratorComponent } from '../../common/component/code-generator/code-generator.component';
import { CodeButtonComponent } from '../../common/component/code-button/code-button.component';
import { AngularCodeTemplateViewModel } from '../../common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from '../../common/angularCodeTemplate';

@Component({
  selector: 'app-select-html',
  templateUrl: './select-html.component.html',
  styleUrls: ['./select-html.component.scss'],
  imports: [FalconTailwindModule, CodeGeneratorComponent, HighlightModule, CodeButtonComponent],
})
export class SelectHtmlComponent {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  controlsConfig = {
    class: 'grid grid-cols-3 gap-4',
    baseControls: [
      new Select({
        formControlName: 'basicMatSelect',
        label: 'Basic mat-select',
        options: [
          { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
          { value: 'oddish-1', viewValue: 'Oddish' },
          { value: 'bellsprout-2', viewValue: 'Bellsprout' },
        ],
        appearance: Appearance.Outline as MatFormFieldAppearance,
      }),
    ],
  };

  constructor() {}

  selectionChange($event: any) {}

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig = AngularCodeTemplate.Select_OnHtml_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig = AngularCodeTemplate.Select_OnHtml_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
