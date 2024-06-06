import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FalconCoreModule } from '@falcon-ng/core';
import { BaseControl } from '@falcon-ng/core';
import { Textbox } from '@falcon-ng/core';
import { Textarea } from '@falcon-ng/core';

@Component({
  selector: 'app-standalone-textarea',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FalconCoreModule,
  ],
  templateUrl: './standalone-textarea.component.html',
  styleUrl: './standalone-textarea.component.scss'
})
export class StandaloneTextareaComponent {
  textArea: BaseControl<string> = new Textarea({ formControlName: 'textArea', label: 'First Name', });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
