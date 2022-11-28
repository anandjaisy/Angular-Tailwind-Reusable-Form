import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {BaseControl} from "../base-control";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'falcon-control-builder',
  templateUrl: './falcon-control-builder.component.html',
  styleUrls: ['./falcon-control-builder.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class FalconControlBuilderComponent {
  @Input() control!: BaseControl<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.control.key].valid; }
}
