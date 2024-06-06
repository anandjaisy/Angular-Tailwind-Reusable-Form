import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {BaseControl} from "@falcon-ng/core"

@Component({
  selector: 'falcon-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
  change($event: any) {
    if (this.control.event !== undefined)
      this.control?.event?.change?.emit($event);
  }
}
