import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BaseControl } from '../../base-control';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { IOptions } from '../../model/interface';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'falcon-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @Input() control!: BaseControl<any>;
  @Input() formGroup!: FormGroup;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  selectable = true;
  removable = true;
  addOnBlur = true;
  filteredOptions: Observable<IOptions[]>;
  autoCompleteControl = new FormControl();
  private items!: FormArray;

  @ViewChild('chipAutoCompleteInput')
  chipAutoCompleteInput!: ElementRef<HTMLInputElement>;
  @ViewChild('chipTextInput') chipTextInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  constructor(private fb: FormBuilder) {
    this.filteredOptions = this.autoCompleteControl.valueChanges.pipe(
      startWith(null),
      map((value: string | null) =>
        value ? this._filter(value) : this.control.options.slice()
      )
    );
    this.filteredOptions.subscribe((item) => console.log(item));
  }

  ngOnInit() {
    console.log(this.control);
    setTimeout(() => {
      if (this.control.chipSelectedOptions.length > 0) {
        this.items = this.formGroup.get(
          this.control.formControlName
        ) as FormArray;
        this.control.chipSelectedOptions.forEach((value: any) => {
          this.items.push(this.createItem(value.value));
        });
      }
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.control.chipSelectedOptions.push({
        viewValue: value.trim(),
        value: value.trim(),
      });
      this.items = this.formGroup.get(
        this.control.formControlName
      ) as FormArray;
      this.items.push(this.createItem(value));
    }

    if (input) {
      input.value = '';
    }
  }

  createItem(value: String): FormGroup {
    return this.fb.group({
      viewValue: value,
      value: value,
    });
  }

  remove(option: IOptions): void {
    const index = this.control.chipSelectedOptions.indexOf(option);

    if (index >= 0) {
      this.control.chipSelectedOptions.splice(index, 1);
      this.items.removeAt(index);
    }
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    this.control.chipSelectedOptions.push({
      viewValue: event.option.value,
      value: event.option.value,
    });
    this.items = this.formGroup.get(this.control.formControlName) as FormArray;
    this.items.push(this.createItem(event.option.value));
    this.chipAutoCompleteInput.nativeElement.value = '';
    this.formGroup.get(this.control.formControlName)?.setValue(null);
  }

  private _filter(value: string): any {
    if (value !== null) {
      const filterValue = value.toLowerCase();
      return this.control.options.filter((option: any) =>
        option.value.toLowerCase().includes(filterValue)
      );
    }
  }

  drop(event: CdkDragDrop<IOptions[]>) {
    moveItemInArray(
      this.control.options,
      event.previousIndex,
      event.currentIndex
    );
  }

  keyboardEnterEvent(event: any): void {
    if (this.control.event !== undefined)
      this.control.event.keyboardEnter?.emit(event);
    this.chipTextInput.nativeElement.value = '';
  }
}
