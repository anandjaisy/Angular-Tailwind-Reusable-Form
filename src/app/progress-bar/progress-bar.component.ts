import {Component} from '@angular/core';
import {AngularCodeTemplate} from "../common/angularCodeTemplate";
import {AngularCodeTemplateViewModel} from "../common/angularCodeTemplateViewModel";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
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
