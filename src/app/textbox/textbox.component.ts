import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { Observable, of } from 'rxjs';
import { Textbox } from '../../../projects/falcon-ng/tailwind/src/lib/control-type/textbox';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent
  extends BaseFormComponent<string>
  implements OnInit
{
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor() {
    super();
    this.defineForm();
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'grid grid-cols-3 gap-4',
      baseControls: [
        new Textbox({
          formControlName: 'firstName',
          label: 'First name',
          value: 'Bombasto',
          order: 1,
        }),
        new Textbox({
          formControlName: 'lastName',
          label: 'Last name',
          value: 'Bombasto',
          order: 1,
        }),
        new Textbox({
          formControlName: 'lastName',
          label: 'Last name',
          value: 'Bombasto',
          order: 1,
        }),
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.FormFieldAppearanceVariant_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.FormFieldAppearanceVariant_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
