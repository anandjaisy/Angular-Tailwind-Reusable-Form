import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatRadioChange} from "@angular/material/radio";
import {BaseControl} from "../../base-control";

@Component({
  selector: 'falcon-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
  @Output() radioGroupChange: EventEmitter<MatRadioChange> =
    new EventEmitter<MatRadioChange>();

  ngOnInit(): void {
    console.log(this.control.options)
    if (this.formGroup === undefined) {
      this.formGroup = new FormGroup({
        default: new FormControl(),
      });
    }
  }

  radioGroupChangeEvent($event: any) {
    this.radioGroupChange.emit($event.value);
  }
}
