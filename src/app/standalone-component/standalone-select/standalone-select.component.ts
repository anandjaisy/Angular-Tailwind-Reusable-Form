import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IComponentEvent } from '@falcon-ng/core';
import { Select } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/control-type/Select';
import { FalconCoreModule } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/falcon-core.module';
import { BaseControl } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/model/base-control';

@Component({
  selector: 'app-standalone-select',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, FalconCoreModule],
  templateUrl: './standalone-select.component.html',
  styleUrl: './standalone-select.component.scss',
})
export class StandaloneSelectComponent implements OnInit {
  changeEvent: IComponentEvent<string> = { change: new EventEmitter<string>() };
  select: BaseControl<string> = new Select({
    formControlName: 'select',
    label: 'select',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
    ],
    event: this.changeEvent,
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.changeEvent.change?.subscribe(event => console.log(event));
    this.select.value = '3';
  }
}
