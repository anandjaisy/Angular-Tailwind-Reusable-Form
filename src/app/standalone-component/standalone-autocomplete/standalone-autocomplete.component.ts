import {
  afterNextRender,
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { HighlightModule } from 'ngx-highlightjs';
import { AutocompleteTextChangeComponent } from './autocomplete-text-change/autocomplete-text-change.component';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import {
  Appearance,
  AutoComplete,
  BaseControl,
  FalconCoreModule,
  IComponentEvent,
} from '../../../../projects/falcon-ng/core/src/public-api';
import { AutocompleteGroup } from './autocomplete-group/autocomplete-group';

@Component({
  selector: 'app-standalone-autocomplete',
  imports: [
    FalconCoreModule,
    ReactiveFormsModule,
    FalconTailwindModule,
    HighlightModule,
    AutocompleteTextChangeComponent,
    AutocompleteGroup,
  ],
  templateUrl: './standalone-autocomplete.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './standalone-autocomplete.component.scss',
})
export class StandaloneAutocompleteComponent implements OnInit {
  changeEvent: IComponentEvent<string> = { change: new EventEmitter<string>() };
  firstName: BaseControl<string> = new AutoComplete({
    formControlName: 'firstName',
    label: 'Basic Auto complete',
    options: [
      { value: 'Sydney', key: 'Syd' },
      { value: 'Melbourne', key: 'Mel' },
      { value: 'Brisbane', key: 'Brisbane' },
      { value: 'NewYork', key: 'New York' },
      { value: 'Kathmandu', key: 'Kathmandu' },
    ],
    event: this.changeEvent,
    appearance: Appearance.Outline as MatFormFieldAppearance,
  });

  presuffixicons: BaseControl<string> = new AutoComplete({
    formControlName: 'presuffixicons',
    label: 'Pre and Suffix Icons',
    options: [
      { value: 'Sydney', key: 'Syd' },
      { value: 'Melbourne', key: 'Mel' },
      { value: 'Brisbane', key: 'Brisbane' },
      { value: 'NewYork', key: 'New York' },
      { value: 'Kathmandu', key: 'Kathmandu' },
    ],
    prefix: { isIcon: true, text: 'search' },
    suffix: { isIcon: true, text: 'search' },
    event: this.changeEvent,
    appearance: Appearance.Outline as MatFormFieldAppearance,
  });

  disable: BaseControl<string> = new AutoComplete({
    formControlName: 'disable',
    label: 'Disable Auto complete',
    options: [
      { value: 'Sydney', key: 'Syd' },
      { value: 'Melbourne', key: 'Mel' },
      { value: 'Brisbane', key: 'Brisbane' },
      { value: 'NewYork', key: 'New York' },
      { value: 'Kathmandu', key: 'Kathmandu' },
    ],
    disabled: true,
    appearance: Appearance.Outline as MatFormFieldAppearance,
  });
  prefilled: BaseControl<string> = new AutoComplete({
    formControlName: 'prefilled',
    label: 'Prefilled',
    options: [
      { value: 'Sydney', key: 'Syd' },
      { value: 'Melbourne', key: 'Mel' },
      { value: 'Brisbane', key: 'Brisbane' },
      { value: 'NewYork', key: 'New York' },
      { value: 'Kathmandu', key: 'Kathmandu' },
    ],
    appearance: Appearance.Outline as MatFormFieldAppearance,
  });
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({});
    afterNextRender(() => {
      this.form.get('prefilled')?.patchValue({ value: 'Sydney', key: 'Syd' });
    });
  }

  ngOnInit(): void {
    //this.changeEvent.change?.subscribe((event) => console.log(event));

    setTimeout(() => {
      this.form.get('prefilled')?.patchValue({ value: 'Sydney', key: 'Syd' });
    }, 100);
  }
}
