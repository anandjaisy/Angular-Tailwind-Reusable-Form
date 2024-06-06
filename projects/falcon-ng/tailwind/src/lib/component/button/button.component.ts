import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BaseControl} from "@falcon-ng/core"

@Component({
  selector: 'falcon-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() control!: BaseControl<string>;
  @Input() formGroup!: FormGroup;
  @Output() btnClick = new EventEmitter<string>();
  childBtnClick() {
    this.btnClick.emit("Button Click Event");
  }
}
