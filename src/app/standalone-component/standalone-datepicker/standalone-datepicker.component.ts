import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FalconCoreModule } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/falcon-core.module';
import { BaseControl } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/model/base-control';
import { DatePicker } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/control-type/DatePicker';
@Component({
    selector: 'app-standalone-datepicker',
    imports: [ReactiveFormsModule, RouterLink, FalconCoreModule],
    templateUrl: './standalone-datepicker.component.html',
    styleUrl: './standalone-datepicker.component.scss'
})
export class StandaloneDatepickerComponent {
  datePicker: BaseControl<string> = new DatePicker({
    formControlName: 'datepicker',
    label: 'Select date',
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
