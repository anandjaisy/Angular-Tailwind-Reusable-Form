import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
export class StandaloneSelectComponent {
  select: BaseControl<string> = new Select({
    formControlName: 'select',
    label: 'select',
  });
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
}
