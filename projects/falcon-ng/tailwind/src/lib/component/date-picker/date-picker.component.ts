import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BaseControl} from "@falcon-ng/core"

@Component({
    selector: 'falcon-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss'],
    standalone: false
})
export class DatePickerComponent {
 control!: BaseControl<string>;
 formGroup!: FormGroup;
}
