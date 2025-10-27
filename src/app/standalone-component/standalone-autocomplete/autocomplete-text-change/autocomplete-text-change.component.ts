import { Component, EventEmitter } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { HighlightModule } from 'ngx-highlightjs';
import { BaseControlBuilder } from 'projects/falcon-ng/core/src/lib/falcon-core/control-builder/base-control-builder';
import {
  Appearance,
  AutoComplete,
  BaseControl,
  FalconCoreModule,
  IComponentEvent,
} from 'projects/falcon-ng/core/src/public-api';
import { FalconTailwindModule } from 'projects/falcon-ng/tailwind/src/public-api';

@Component({
  selector: 'app-autocomplete-text-change',
  imports: [
    FalconCoreModule,
    ReactiveFormsModule,
    FalconTailwindModule,
    HighlightModule,
  ],
  templateUrl: './autocomplete-text-change.component.html',
  styleUrl: './autocomplete-text-change.component.scss',
})
export class AutocompleteTextChangeComponent {
  changeEvent: IComponentEvent<string> = {
    change: new EventEmitter<string>(),
    inputChange: new EventEmitter<string>(),
  };

  textChange: BaseControl<string> = new AutoComplete({
    formControlName: 'firstName',
    label: 'Text input print on console',
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
    this.changeEvent.inputChange?.subscribe(event => console.log(event));
  }
}
