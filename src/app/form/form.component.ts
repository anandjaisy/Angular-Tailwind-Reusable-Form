import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {Observable,of} from "rxjs";
import {Radio} from "../../../projects/falcon-ng/tailwind/src/lib/control-type/Radio";
import {Appearance} from "../../../projects/falcon-ng/tailwind/src/lib/model/enum";
import {Textbox} from "../../../projects/falcon-ng/tailwind/src/lib/control-type/textbox";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends BaseFormComponent<string>
  implements OnInit {

  constructor() {
    super();
    this.defineForm();
  }

  ngOnInit(): void {
    this.formGroup = this.createControls();
  }

  protected defineForm(): void {
    this.controlsConfig = {
      class: 'flex flex-col m-5',
      baseControls: [
        new Textbox({
          formControlName: 'firstName',
          label: 'User Name',
          value: '',
        }),
        new Textbox({
          formControlName: 'lastName',
          label: 'Password',
          value: '',
          type: 'password'
        }),
        new Textbox({
          formControlName: 'lastName',
          label: 'Password',
          value: '',
          type: 'password'
        }),
      ],
    };
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }

}
