import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import { BaseControl } from '@falcon-ng/core';

@Component({
  selector: 'lib-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss']
})
export class RichTextEditorComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
}
