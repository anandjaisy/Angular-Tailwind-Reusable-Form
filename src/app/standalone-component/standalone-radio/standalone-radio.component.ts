import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import {
  Appearance,
  BaseControl,
  CheckBox,
  FalconCoreModule,
  IComponentEvent,
  Radio,
  Textbox,
} from '../../../../projects/falcon-ng/core/src/public-api';
@Component({
  selector: 'app-standalone-radio',
  imports: [
    FalconCoreModule,
    ReactiveFormsModule,
    FalconTailwindModule,
    HighlightModule,
    MatCard,
    MatCardContent,
    MatDivider,
    MatIcon,
    MatMiniFabAnchor,
    RouterLink,
  ],
  templateUrl: './standalone-radio.component.html',
  styleUrl: './standalone-radio.component.scss',
})
export class StandaloneRadioComponent implements OnInit {
  changeEvent: IComponentEvent<string> = { change: new EventEmitter<string>() };
  firstName: BaseControl<string> = new Radio({
    formControlName: 'basicRadios',
    label: 'Positon BEFORE ',
    options: [
      { viewValue: 'Option 1', value: 'Option 1' },
      { viewValue: 'Option 2', value: 'Option 2' },
    ],
    appearance: Appearance.Before,
    class: 'radio-group-column',
    event: this.changeEvent,
  });

  disable: BaseControl<string> = new Radio({
    formControlName: 'disable',
    disabled: true,
    label: 'Positon BEFORE ',
    options: [
      { viewValue: 'Option 1', value: 'Option 1' },
      { viewValue: 'Option 2', value: 'Option 2' },
    ],
    appearance: Appearance.Before,
    class: 'radio-group-column',
    event: this.changeEvent,
  });

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.changeEvent.change?.subscribe((event) => console.log(event));
  }
}
