import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BaseControl} from "../../base-control";

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
