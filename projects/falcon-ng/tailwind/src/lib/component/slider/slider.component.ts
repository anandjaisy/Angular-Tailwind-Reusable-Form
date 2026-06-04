import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormGroup} from "@angular/forms";
import { BaseControl } from '@falcon-ng/core';

@Component({
    selector: 'falcon-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SliderComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
