import { Component, OnInit, Input } from '@angular/core';
import {BaseControl} from "../../base-control";
import {FormControl, FormGroup} from "@angular/forms";
import {IOptions} from "../../model/interface";
import {Observable} from "rxjs";
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'falcon-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
  autoCompleteControl = new FormControl();
  constructor() { }
  filteredOptions!: Observable<IOptions[]>;

  ngOnInit() {
    this.filteredOptions = this.autoCompleteControl.valueChanges.pipe(startWith(''),map(value => this._filter(value)));
  }

  private _filter(value: string): IOptions[] {
    const filterValue = value.toLowerCase();
    return this.control.options.filter((option: IOptions) => option?.key?.toLowerCase().includes(filterValue));
  }

  optionSelected(value: any) {
    this.formGroup?.get(this.control?.formControlName)?.setValue(value);
  }
}
