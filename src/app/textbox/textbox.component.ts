import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from "../../../projects/falcon-ng/tailwind/src/lib/base-form-component";
import {Observable,of} from "rxjs";
import {BaseControl} from "../../../projects/falcon-ng/tailwind/src/lib/base-control";
import {Textbox} from "../../../projects/falcon-ng/tailwind/src/lib/control-type/textbox";

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent extends BaseFormComponent<string> implements OnInit{
  private controls: BaseControl<string>[] = [];
  constructor() {
    super();
    this.defineForm();
  }
  ngOnInit(): void {
    this.createControls(this.controls);
  }
  protected defineForm(): void {
    this.controls = [
      new Textbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      })
    ];
  }

  protected submitDataSource(model: string): Observable<string> {
    return of(model);
  }
}
