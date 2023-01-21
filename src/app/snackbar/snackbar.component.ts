import { Component } from '@angular/core';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconCoreModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-core.module';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  standalone: true,
  imports: [
    FalconCoreModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
  ],
})
export class SnackbarComponent {
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Snackbar_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Snackbar_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
