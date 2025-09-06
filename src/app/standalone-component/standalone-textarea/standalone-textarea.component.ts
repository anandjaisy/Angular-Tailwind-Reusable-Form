import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FalconCoreModule } from '@falcon-ng/core';
import { BaseControl } from '@falcon-ng/core';
import { Textbox } from '@falcon-ng/core';
import { Textarea } from '@falcon-ng/core';
import { HighlightModule } from 'ngx-highlightjs';
import { FalconTailwindModule } from 'projects/falcon-ng/tailwind/src/public-api';

@Component({
  selector: 'app-standalone-textarea',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FalconCoreModule,
    FalconCoreModule,
    ReactiveFormsModule,
    FalconTailwindModule,
    HighlightModule,
  ],
  templateUrl: './standalone-textarea.component.html',
  styleUrl: './standalone-textarea.component.scss',
})
export class StandaloneTextareaComponent {
  textArea: BaseControl<string> = new Textarea({
    formControlName: 'textArea',
    label: 'First Name',
  });
  firstNameWithOutLabel: BaseControl<string> = new Textbox({
    formControlName: 'firstName',
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
