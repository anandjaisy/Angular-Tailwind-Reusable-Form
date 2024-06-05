import { Component, OnInit } from '@angular/core';
import { AngularCodeTemplateViewModel } from '../../common/angularCodeTemplateViewModel';
import { BaseFormComponent } from '../../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplate } from '../../common/angularCodeTemplate';
import {
  Appearance,
  InputTypes,
} from '../../../../projects/falcon-ng/tailwind/src/lib/model/enum';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Chip } from '../../../../projects/falcon-ng/tailwind/src/lib/control-type/Chip';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeGeneratorComponent } from '../../common/component/code-generator/code-generator.component';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeButtonComponent } from '../../common/component/code-button/code-button.component';

@Component({
  selector: 'app-chips-drag-drop',
  templateUrl: './chips-drag-drop.component.html',
  styleUrls: ['./chips-drag-drop.component.scss'],
  standalone: true,
  imports: [
    FalconTailwindModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
  ],
})
export class ChipsDragDropComponent
  extends BaseFormComponent<string>
  implements OnInit
{
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();
  public codeGeneratorEnable: boolean = false;

  constructor() {
    super();
    this.defineForm();
  }

  protected defineForm(): void {
    this.controlsConfig = {
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
          type: InputTypes.DragDrop,
          chipSelectedOptions: [],
          formArray: [],
        }),
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
    this.controlsConfig.baseControls[0].chipSelectedOptions = [
      { value: 'Kathmandu', viewValue: 'Kathmandu' },
    ];
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.Chips_DRAGDROP_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.Chips_DRAGDROP_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
