import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import {
  Appearance,
  InputTypes,
} from '../../../projects/falcon-ng/core/src/lib/falcon-core/model/enum';
import { Slider } from '@falcon-ng/core';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone: true,
  imports: [
    FalconTailwindModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
  ],
})
export class SliderComponent extends BaseFormComponent<any> implements OnInit {
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
        new Slider({
          label: 'Value',
          appearance: Appearance.Standard,
          type: InputTypes.Number,
          value: 0,
          formControlName: 'value',
        }),
        new Slider({
          formControlName: 'MinValue',
          label: 'Min Value',
          appearance: Appearance.Standard,
          type: InputTypes.Number,
          value: 0,
        }),
      ],
    };
  }

  protected submitDataSource(model: any): Observable<any> {
    return of(model);
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Slider_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Slider_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
