import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import { map, startWith } from 'rxjs/operators';
import {BaseControl,IOptions} from "@falcon-ng/core"
@Component({
    selector: 'falcon-auto-complete',
    templateUrl: './auto-complete.component.html',
    styleUrls: ['./auto-complete.component.scss'],
    standalone: false
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
