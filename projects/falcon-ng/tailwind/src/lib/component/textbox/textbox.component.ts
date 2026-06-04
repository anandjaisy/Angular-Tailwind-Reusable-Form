import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from '@falcon-ng/core';

@Component({
    selector: 'falcon-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TextboxComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
