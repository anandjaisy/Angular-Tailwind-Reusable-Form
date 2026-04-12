import { Component } from '@angular/core';
import {
  BaseControlBuilder,
  controlProvider,
  sharedControlDeps,
} from '../../control-builder/base-control-builder';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IOptions, IOptionGroup } from '../../model/interface';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'fal-autocomplete',
  imports: [MatInputModule, MatAutocompleteModule, MatTooltipModule, ...sharedControlDeps],
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
        @if(control.config.selectProperty.optionGroups) { @for(group of filteredOptionGroup; track
        group) {
        <mat-optgroup [label]="group.label">
          @for(option of group.options; track option) {
          <mat-option [value]="option">{{ option.value }}</mat-option>
          }
        </mat-optgroup>
        } } @else { @for(option of filteredOptions; track option) {
        <mat-option [value]="option">{{ option.value }}</mat-option>
        } }
      </mat-autocomplete>
      @if(control.config.prefix && control.config.prefix.isIcon){
      <mat-icon matPrefix [matTooltip]="control.config.prefix.toolTipText!">{{
        control.config.prefix.text
      }}</mat-icon>
      } @if(control.config.suffix && control.config.suffix.isIcon){
      <mat-icon matSuffix [matTooltip]="control.config.suffix.toolTipText!">{{
        control.config.suffix.text
      }}</mat-icon>
      }
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
  filteredOptions: IOptions[] = [];
  filteredOptionGroup: IOptionGroup[] = [];
  constructor() {
    super();
    this.filteredOptions = [...this.control.config.options];
    if (this.control.config?.selectProperty?.optionGroups)
      this.filteredOptionGroup = [...this.control.config.optionGroup];
  }

  displayFn(option: IOptions): string {
    return option && option.value ? option.value : '';
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filteredOptions = this._filter(target.value || '');
    if (this.control.config?.selectProperty?.optionGroups)
      this.filteredOptionGroup = this._filterGroup(target.value || '');
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
  private _filterGroup(value: string): IOptionGroup[] {
    if (value) {
      return this.control.config.optionGroup
        .map(
          (groupOption: IOptionGroup) =>
            ({ label: groupOption.label, options: this._filter(value) } as IOptionGroup)
        )
        .filter((group: IOptionGroup) => group.label.length > 0);
    }

    return this.control.config.optionGroup;
  }
}
