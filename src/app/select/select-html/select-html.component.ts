import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from 'src/app/common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from 'src/app/common/angularCodeTemplate';
import { Appearance } from '../../../../projects/falcon-ng/tailwind/src/lib/model/enum';
import { Select } from '../../../../projects/falcon-ng/tailwind/src/lib/control-type/select';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { HighlightModule } from 'ngx-highlightjs';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeGeneratorComponent } from '../../common/component/code-generator/code-generator.component';
import { CodeButtonComponent } from '../../common/component/code-button/code-button.component';

@Component({
  selector: 'app-select-html',
  templateUrl: './select-html.component.html',
  styleUrls: ['./select-html.component.scss'],
  standalone: true,
  imports: [
    FalconTailwindModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
  ],
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
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Select_OnHtml_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Select_OnHtml_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
