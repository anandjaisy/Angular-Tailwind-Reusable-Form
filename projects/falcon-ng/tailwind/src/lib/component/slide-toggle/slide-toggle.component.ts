import { Component } from '@angular/core';
import {BaseControl} from "../../base-control";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'falcon-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
})
export class SlideToggleComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
