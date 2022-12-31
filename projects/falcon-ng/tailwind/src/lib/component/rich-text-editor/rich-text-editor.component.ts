import {Component, Input} from '@angular/core';
import {BaseControl} from "../../base-control";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'lib-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
