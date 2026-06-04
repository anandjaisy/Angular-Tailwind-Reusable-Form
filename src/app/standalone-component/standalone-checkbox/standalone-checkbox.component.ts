import { Component, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabAnchor } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import {
  Appearance,
  BaseControl,
  CheckBox,
  FalconCoreModule,
  IComponentEvent,
  Radio,
  Textbox,
} from '../../../../projects/falcon-ng/core/src/public-api';
@Component({
  selector: 'app-standalone-checkbox',
  imports: [
    FalconCoreModule,
    ReactiveFormsModule,
    FalconTailwindModule,
    HighlightModule,
    MatCard,
    MatCardContent,
    MatDivider,
    MatIcon,
    MatMiniFabAnchor,
    RouterLink,
  ],
  templateUrl: './standalone-checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './standalone-checkbox.component.scss',
})
export class StandaloneCheckboxComponent implements OnInit {
  changeEvent: IComponentEvent<boolean> = {
    change: new EventEmitter<boolean>(),
  };
  checkboxAfter: BaseControl<boolean> = new CheckBox({
    formControlName: 'firstName',
    label: 'After checkbox',
    labelPosition: 'after',
    event: this.changeEvent,
  });
  checkboxBefore: BaseControl<boolean> = new CheckBox({
    formControlName: 'firstName',
    label: 'Before checkbox',
    labelPosition: 'before',
    event: this.changeEvent,
  });

  disable: BaseControl<boolean> = new CheckBox({
    formControlName: 'disable',
    label: 'Before checkbox',
    labelPosition: 'before',
    event: this.changeEvent,
    disabled: true,
  });

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.changeEvent.change?.subscribe((event) => console.log(event));
  }
}
