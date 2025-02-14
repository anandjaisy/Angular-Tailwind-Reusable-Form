import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { BaseControl } from '@falcon-ng/core';

@Component({
    selector: 'falcon-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    standalone: false
})
export class SelectComponent implements OnInit {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
  @Output() selectionChange: EventEmitter<MatSelectChange> =
    new EventEmitter<MatSelectChange>();

  constructor() {}

  ngOnInit(): void {
    if (this.formGroup === undefined) {
      this.formGroup = new FormGroup({
        default: new FormControl(),
      });
    }
  }

  selectChange($event: any) {
    this.selectionChange.emit($event.value);
    if (this.control.event !== undefined)
      this.control.event.change?.emit($event);
  }
}
