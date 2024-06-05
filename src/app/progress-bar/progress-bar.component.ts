import { Component } from '@angular/core';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: true,
  imports: [
    FalconTailwindModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
  ],
})
export class ProgressBarComponent {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.ProgressBar_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.ProgressBar_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
