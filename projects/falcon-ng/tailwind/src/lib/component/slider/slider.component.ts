import { Component } from '@angular/core';
import {BaseControl} from "../../base-control";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'falcon-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
