import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { HighlightModule } from 'ngx-highlightjs';
import {
  Appearance,
  AutoComplete,
  BaseControl,
  FalconCoreModule,
  IComponentEvent,
  Textbox,
} from 'projects/falcon-ng/core/src/public-api';
import { FalconTailwindModule } from 'projects/falcon-ng/tailwind/src/public-api';

@Component({
  selector: 'app-standalone-autocomplete',
  imports: [
    FalconCoreModule,
    ReactiveFormsModule,
    FalconTailwindModule,
    HighlightModule,
  ],
  templateUrl: './standalone-autocomplete.component.html',
  styleUrl: './standalone-autocomplete.component.scss',
})
export class StandaloneAutocompleteComponent implements OnInit {
  changeEvent: IComponentEvent<string> = { change: new EventEmitter<string>() };
  firstName: BaseControl<string> = new AutoComplete({
    formControlName: 'firstName',
    label: 'Basic Auto complete',
    options: [
      { value: 'Sydney', key: 'Sydney' },
      { value: 'Melbourne', key: 'Melbourne' },
      { value: 'Brisbane', key: 'Brisbane' },
      { value: 'NewYork', key: 'New York' },
      { value: 'Kathmandu', key: 'Kathmandu' },
    ],
    event: this.changeEvent,
    appearance: Appearance.Outline as MatFormFieldAppearance,
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.changeEvent.change?.subscribe(event => console.log(event));
  }
}
