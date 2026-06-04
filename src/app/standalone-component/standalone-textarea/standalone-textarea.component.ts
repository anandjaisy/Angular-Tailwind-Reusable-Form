import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import {
  BaseControl,
  FalconCoreModule,
  Textarea,
  Textbox,
} from '../../../../projects/falcon-ng/core/src/public-api';

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
  changeDetection: ChangeDetectionStrategy.Eager,
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
  disabled: BaseControl<string> = new Textbox({
    formControlName: 'disabled',
    disabled: true,
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
