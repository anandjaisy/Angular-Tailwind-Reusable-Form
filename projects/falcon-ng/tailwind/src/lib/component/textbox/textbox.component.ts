import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BaseControl} from "../../base-control";

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent{
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
