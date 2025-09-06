import { Component, EventEmitter, OnInit } from '@angular/core';
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
} from 'projects/falcon-ng/core/src/public-api';

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
  styleUrl: './standalone-checkbox.component.scss',
})
export class StandaloneCheckboxComponent implements OnInit {
  changeEvent: IComponentEvent<string> = { change: new EventEmitter<string>() };
  firstName: BaseControl<boolean> = new CheckBox({
    formControlName: 'firstName',
    label: 'First Name',
  });

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.changeEvent.change?.subscribe(event => console.log(event));
  }
}
