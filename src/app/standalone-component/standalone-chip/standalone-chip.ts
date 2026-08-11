import { Component } from '@angular/core';
import {
  BaseControl,
  FalconCoreModule,
  Chip,
} from '../../../../projects/falcon-ng/core/src/public-api';
import { RouterLink } from '@angular/router';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-standalone-chip',
  imports: [ReactiveFormsModule, RouterLink, FalconCoreModule, JsonPipe],
  templateUrl: './standalone-chip.html',
  styleUrl: './standalone-chip.scss',
})
export class StandaloneChip {
  basicChip: BaseControl<string> = new Chip({
    formControlName: 'basicChip',
    options: [
      { key: '1', value: 'Option 1', class: 'ward-chip yellow-chip' },
      { key: '2', value: 'Option 2', class: 'ward-chip yellow-chip' },
      { key: '3', value: 'Option 3', class: 'ward-chip yellow-chip' },
    ],
  });

  selectChip: BaseControl<string> = new Chip({
    formControlName: 'selectChip',
    type: 'select',
    selectProperty: {
      multiple: false, // Or you can remove this property if you want single selection by default
    },
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
  });

  multiSelectChip: BaseControl<string> = new Chip({
    formControlName: 'multiSelectPicker',
    type: 'select',
    selectProperty: {
      multiple: true,
    },
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
  });

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
