import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {AngularCodeTemplateViewModel} from "../common/angularCodeTemplateViewModel";
import {Appearance, InputTypes} from "../../../projects/falcon-ng/tailwind/src/lib/model/enum";
import {Observable, of} from "rxjs";
import {AngularCodeTemplate} from "../common/angularCodeTemplate";
import {Slider} from "../../../projects/falcon-ng/tailwind/src/lib/control-type/Slider";

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent extends BaseFormComponent<any>
  implements OnInit {
  progressSpinnerValue: number = 10;
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
          formControlName: 'slider'
        })
      ],
    };
  }

  onChanges(): void {
    this.formGroup.get('slider')?.valueChanges.subscribe((val) => {
      this.progressSpinnerValue = val;
    });
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
    this.onChanges();
  }

  submitDataSource(model: string): Observable<string> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.ProgressSpinner_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.ProgressSpinner_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
