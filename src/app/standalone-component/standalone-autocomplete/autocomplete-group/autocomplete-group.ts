import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  Appearance,
  AutoComplete,
  BaseControl,
  FalconCoreModule,
  IOptionGroup,
} from '../../../../../projects/falcon-ng/core/src/public-api';
import { FalconTailwindModule } from '../../../../../projects/falcon-ng/tailwind/src/public-api';
import { AutocompleteTextChangeComponent } from '../autocomplete-text-change/autocomplete-text-change.component';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-autocomplete-group',
  imports: [FalconCoreModule, ReactiveFormsModule, FalconTailwindModule],
  templateUrl: './autocomplete-group.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './autocomplete-group.css',
})
export class AutocompleteGroup {
  @Input() form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
  autocompleteGroup: BaseControl<string> = new AutoComplete({
    formControlName: 'autocompleteGroup',
    label: 'Autocomplete Group label',
    selectProperty: { optionGroups: true },
    //event: this.changeEvent,
    optionGroup: [
      {
        label: 'A',
        options: [
          { value: 'Alabama', key: 'Alabama' },
          { value: 'Alaska', key: 'Alaska' },
          { value: 'Arizona', key: 'Arizona' },
          { value: 'Arkansas', key: 'Arkansas' },
        ],
      } as IOptionGroup,
      {
        label: 'C',
        options: [
          { value: 'California', key: 'California' },
          { value: 'Colorado', key: 'Colorado' },
          { value: 'Connecticut', key: 'Connecticut' },
        ],
      } as IOptionGroup,
      {
        label: 'D',
        options: [{ value: 'Delaware', key: 'Delaware' }],
      } as IOptionGroup,
      {
        label: 'F',
        options: [{ value: 'Florida', key: 'Florida' }],
      } as IOptionGroup,
      {
        label: 'G',
        options: [{ value: 'Georgia', key: 'Georgia' }],
      } as IOptionGroup,
      {
        label: 'H',
        options: [{ value: 'Hawaii', key: 'Hawaii' }],
      } as IOptionGroup,
      {
        label: 'I',
        options: [
          { value: 'Idaho', key: 'Idaho' },
          { value: 'Illinois', key: 'Illinois' },
          { value: 'Indiana', key: 'Indiana' },
          { value: 'Iowa', key: 'Iowa' },
        ],
      } as IOptionGroup,
      {
        label: 'K',
        options: [
          { value: 'Kansas', key: 'Kansas' },
          { value: 'Kentucky', key: 'Kentucky' },
        ],
      } as IOptionGroup,
      {
        label: 'L',
        options: [{ value: 'Louisiana', key: 'Louisiana' }],
      } as IOptionGroup,
      {
        label: 'M',
        options: [
          { value: 'Maine', key: 'Maine' },
          { value: 'Maryland', key: 'Maryland' },
          { value: 'Massachusetts', key: 'Massachusetts' },
          { value: 'Michigan', key: 'Michigan' },
          { value: 'Minnesota', key: 'Minnesota' },
          { value: 'Mississippi', key: 'Mississippi' },
          { value: 'Missouri', key: 'Missouri' },
          { value: 'Montana', key: 'Montana' },
        ],
      } as IOptionGroup,
      {
        label: 'N',
        options: [
          { value: 'Nebraska', key: 'Nebraska' },
          { value: 'Nevada', key: 'Nevada' },
          { value: 'New Hampshire', key: 'New Hampshire' },
          { value: 'New Jersey', key: 'New Jersey' },
          { value: 'New Mexico', key: 'New Mexico' },
          { value: 'New York', key: 'New York' },
          { value: 'North Carolina', key: 'North Carolina' },
          { value: 'North Dakota', key: 'North Dakota' },
        ],
      } as IOptionGroup,
      {
        label: 'O',
        options: [
          { value: 'Ohio', key: 'Ohio' },
          { value: 'Oklahoma', key: 'Oklahoma' },
          { value: 'Oregon', key: 'Oregon' },
        ],
      } as IOptionGroup,
      {
        label: 'P',
        options: [{ value: 'Pennsylvania', key: 'Pennsylvania' }],
      } as IOptionGroup,
      {
        label: 'R',
        options: [{ value: 'Rhode Island', key: 'Rhode Island' }],
      } as IOptionGroup,
      {
        label: 'S',
        options: [
          { value: 'South Carolina', key: 'South Carolina' },
          { value: 'South Dakota', key: 'South Dakota' },
        ],
      } as IOptionGroup,
      {
        label: 'T',
        options: [
          { value: 'Tennessee', key: 'Tennessee' },
          { value: 'Texas', key: 'Texas' },
        ],
      } as IOptionGroup,
      {
        label: 'U',
        options: [{ value: 'Utah', key: 'Utah' }],
      } as IOptionGroup,
      {
        label: 'V',
        options: [
          { value: 'Vermont', key: 'Vermont' },
          { value: 'Virginia', key: 'Virginia' },
        ],
      } as IOptionGroup,
      {
        label: 'W',
        options: [
          { value: 'Washington', key: 'Washington' },
          { value: 'West Virginia', key: 'West Virginia' },
          { value: 'Wisconsin', key: 'Wisconsin' },
          { value: 'Wyoming', key: 'Wyoming' },
        ],
      } as IOptionGroup,
    ],
    appearance: Appearance.Outline as MatFormFieldAppearance,
  });
}
