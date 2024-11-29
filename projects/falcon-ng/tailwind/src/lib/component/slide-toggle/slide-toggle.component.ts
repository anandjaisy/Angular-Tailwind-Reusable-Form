import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import { BaseControl } from '@falcon-ng/core';

@Component({
    selector: 'falcon-slide-toggle',
    templateUrl: './slide-toggle.component.html',
    styleUrls: ['./slide-toggle.component.scss'],
    standalone: false
})
export class SlideToggleComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
