import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../projects/falcon-ng/tailwind/src/lib/base-form-component';
import { Observable, of } from 'rxjs';
import { AngularCodeTemplateViewModel } from '../common/angularCodeTemplateViewModel';
import { AngularCodeTemplate } from '../common/angularCodeTemplate';
import { RichTextEditor } from '@falcon-ng/core';
import { Validators } from '@angular/forms';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { CodeGeneratorComponent } from '../common/component/code-generator/code-generator.component';
import { HighlightModule } from 'ngx-highlightjs';
import { CodeButtonComponent } from '../common/component/code-button/code-button.component';

@Component({
  selector: 'app-angular-rich-text-editor',
  templateUrl: './angular-rich-text-editor.component.html',
  styleUrls: ['./angular-rich-text-editor.component.scss'],
  standalone: true,
  imports: [
    FalconTailwindModule,
    CodeGeneratorComponent,
    HighlightModule,
    CodeButtonComponent,
  ],
})
export class AngularRichTextEditorComponent
  extends BaseFormComponent<any>
  implements OnInit
{
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
    new AngularCodeTemplateViewModel();

  constructor() {
    super();
    this.defineForm();
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'flex justify-center',
      baseControls: [
        new RichTextEditor({
          editorProperty: {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '0',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
              { class: 'arial', name: 'Arial' },
              {
                class: 'times-new-roman',
                name: 'Times New Roman',
              },
              { class: 'calibri', name: 'Calibri' },
              {
                class: 'comic-sans-ms',
                name: 'Comic Sans MS',
              },
            ],
            customClasses: [
              {
                name: 'quote',
                class: 'quote',
              },
              {
                name: 'redText',
                class: 'redText',
              },
              {
                name: 'titleText',
                class: 'titleText',
                tag: 'h1',
              },
            ],
            uploadUrl: 'v1/image',
            uploadWithCredentials: false,
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
          },
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Required Field',
            },
          ],
          formControlName: 'editor',
        }),
      ],
    };
  }

  protected submitDataSource(model: any): Observable<any> {
    return of(model);
  }

  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
      AngularCodeTemplate.ANGULAR_EDITOR_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
      AngularCodeTemplate.ANGULAR_EDITOR_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
