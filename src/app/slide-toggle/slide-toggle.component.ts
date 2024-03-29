import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Appearance } from '../../../projects/falcon-ng/tailwind/src/lib/model/enum';
import { BaseControl } from '../../../projects/falcon-ng/tailwind/src/lib/base-control';
import { SliderToggle } from '../../../projects/falcon-ng/tailwind/src/lib/control-type/SlideToggle';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconCoreModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-core.module';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
  standalone: true,
  imports: [
    FalconCoreModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
  ],
})
export class SlideToggleComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor() {
    super();
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'grid grid-cols-2 gap-4',
      baseControls: [
        new SliderToggle({
          formControlName: 'slideMeBEFORE',
          label: 'Slide me! BEFORE text color=accent',
          appearance: Appearance.Before,
          color: 'accent',
          value: true,
        }),
        new SliderToggle({
          formControlName: 'slideMeAFTERText',
          label: 'Slide me! BEFORE text color=accent',
          appearance: Appearance.Before,
          color: 'primary',
          value: false,
        }),
      ],
    };
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  submitDataSource(model: string): Observable<string> {
    return of(model);
  }
  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.SlideToggle_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.SlideToggle_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
