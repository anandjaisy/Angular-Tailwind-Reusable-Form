import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {BaseControl, Layout} from "../base-control";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'control-builder',
  templateUrl: './control-builder.component.html',
  styleUrls: ['./control-builder.component.scss']
})
export class ControlBuilderComponent {
  @Input() layout!: Layout<string>;
  @Input() formGroup!: FormGroup;
  //get isValid() { return this.form.controls[this.control.key].valid; }
}
