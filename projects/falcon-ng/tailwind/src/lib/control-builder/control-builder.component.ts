import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import { Layout } from '../model/layout';

@Component({
  selector: 'control-builder',
  templateUrl: './control-builder.component.html',
  styleUrls: ['./control-builder.component.scss']
})
export class ControlBuilderComponent {
  @Input() layout!: Layout<string>;
  @Input() formGroup!: FormGroup;
}
