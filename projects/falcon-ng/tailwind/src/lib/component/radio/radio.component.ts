import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseControl } from 'dist/@falcon-ng/tailwind/lib/base-control';

@Component({
  selector: 'falcon-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
  // change($event: any) {
  //   if (this.control.event !== undefined)
  //     this.control?.event?.change?.emit($event);
  // }
}
