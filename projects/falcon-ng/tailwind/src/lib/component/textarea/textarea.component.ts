import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '@falcon-ng/core';

@Component({
    selector: 'falcon-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TextareaComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
