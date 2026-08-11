import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';
import {
  BaseControl,
  DatePicker,
  FalconCoreModule,
} from '../../../../projects/falcon-ng/core/src/public-api';

@Component({
  selector: 'app-standalone-datepicker',
  imports: [ReactiveFormsModule, RouterLink, FalconCoreModule, JsonPipe],
  templateUrl: './standalone-datepicker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './standalone-datepicker.component.scss',
})
export class StandaloneDatepickerComponent {
  datePicker: BaseControl<string> = new DatePicker({
    formControlName: 'datepicker',
    label: 'Select date',
    hint: { isIcon: false, show: true, text: 'MM/DD/YYYY – MM/DD/YYYY' },
  });
  firstNameWithOutLabel: BaseControl<string> = new DatePicker({
    formControlName: 'firstName',
  });
  disable: BaseControl<string> = new DatePicker({
    formControlName: 'disable',
    disabled: true,
    placeHolder: 'Disable place holder',
  });
  dateRange: BaseControl<string> = new DatePicker({
    formControlName: 'dateRange',
    type: 'date-range',
    placeHolder: 'Disable place holder',
  });

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
