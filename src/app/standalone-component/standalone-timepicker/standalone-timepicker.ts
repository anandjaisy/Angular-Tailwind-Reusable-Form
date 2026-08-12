import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {
  BaseControl,
  TimePicker,
  FalconCoreModule,
} from '../../../../projects/falcon-ng/core/src/public-api';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-standalone-timepicker',
  imports: [ReactiveFormsModule, RouterLink, FalconCoreModule, JsonPipe],
  templateUrl: './standalone-timepicker.html',
  styleUrl: './standalone-timepicker.scss',
})
export class StandaloneTimepicker {
  timePicker: BaseControl<string> = new TimePicker({
    formControlName: 'timePicker',
    label: 'Select time',
  });

  intervalTimePicker: BaseControl<string> = new TimePicker({
    formControlName: 'intervalTimePicker',
    label: 'Select interval time',
    componentProperties: {
      interval: '1h', // Set the interval to 15 minutes
    },
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
