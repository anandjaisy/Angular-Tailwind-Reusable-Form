import { Component } from '@angular/core';
import { BaseControl } from '../../base-control';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'falcon-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
