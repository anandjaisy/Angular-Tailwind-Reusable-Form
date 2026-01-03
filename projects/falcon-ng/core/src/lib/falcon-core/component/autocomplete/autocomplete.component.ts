import { Component, OnInit } from '@angular/core';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IOptions } from '../../model/interface';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'fal-autocomplete',
  imports: [MatInputModule, MatAutocompleteModule, ...sharedControlDeps],
  viewProviders: [controlProvider],
  template: `<mat-form-field
      [appearance]="control.config.appearance"
      [ngStyle]="control.config.style"
      [ngClass]="control.config.class"
      class="w-full"
    >
      @if(control.config.label){
      <mat-label>{{ control.config.label }}</mat-label>
      }
      <input
        matInput
        type="text"
        [formControlName]="control.formControlName"
        [placeholder]="control.config.placeHolder"
        [ngStyle]="control.config.style"
        [ngClass]="control.config.class"
        [matAutocomplete]="auto"
        (input)="onInputChange($event)"
        [container]="containerDir.container"
      />
      <mat-autocomplete
        #auto="matAutocomplete"
        (optionSelected)="optionSelected($event.option.viewValue)"
        [displayWith]="displayFn"
      >
        @for(option of filteredOptions; track option){
        <mat-option [value]="option">{{ option.value }}</mat-option>
        }
      </mat-autocomplete>
    </mat-form-field>
    <ng-container
      falconValidationMessageContainer
      #containerDir="falconValidationMessageContainer"
    />`,
  styles: `.w-full {
    width: 100%
  }`,
})
export class AutocompleteComponent extends BaseControlBuilder {
  private originalOptions: IOptions[] = [];
  filteredOptions: IOptions[] = [];
  constructor() {
    super();
    this.originalOptions = [...this.control.config.options];
    this.filteredOptions = [...this.originalOptions];
  }

  displayFn(option: IOptions): string {
    return option && option.value ? option.value : '';
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filteredOptions = this._filter(target.value || '');
    this.control.config.event.inputChange?.emit(target.value || '');
  }

  private _filter(value: string): IOptions[] {
    const filterValue = value.toLowerCase();
    return this.control.config.options.filter((option: IOptions) =>
      option?.key?.toLowerCase().includes(filterValue)
    );
  }

  optionSelected(event: any) {
    this.control.config.event.keyboardEnter?.emit(event);
    this.control.config.event.change?.emit(event);
  }
}
