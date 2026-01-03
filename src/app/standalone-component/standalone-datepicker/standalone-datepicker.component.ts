import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  BaseControl,
  DatePicker,
  FalconCoreModule,
} from '../../../../projects/falcon-ng/core/src/public-api';

@Component({
  selector: 'app-standalone-datepicker',
  imports: [ReactiveFormsModule, RouterLink, FalconCoreModule],
  templateUrl: './standalone-datepicker.component.html',
  styleUrl: './standalone-datepicker.component.scss',
})
export class StandaloneDatepickerComponent {
  datePicker: BaseControl<string> = new DatePicker({
    formControlName: 'datepicker',
    label: 'Select date',
  });
  firstNameWithOutLabel: BaseControl<string> = new DatePicker({
    formControlName: 'firstName',
  });
  disable: BaseControl<string> = new DatePicker({
    formControlName: 'firstName',
    disabled: true,
    placeHolder: 'Disable place holder',
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
