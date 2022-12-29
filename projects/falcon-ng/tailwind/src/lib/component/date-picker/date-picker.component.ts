import { Component } from '@angular/core';
import {BaseControl} from "../../base-control";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'falcon-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
 control!: BaseControl<string>;
 formGroup!: FormGroup;
}
