import { Component, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {
  BaseControl,
  FalconCoreModule,
  IComponentEvent,
  SliderToggle,
} from '../../../../projects/falcon-ng/core/src/public-api';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatMiniFabAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatCard, MatCardContent } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';
import { FalconTailwindModule } from '../../../../projects/falcon-ng/tailwind/src/public-api';

@Component({
  selector: 'app-standalone-slide-toogle',
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
  templateUrl: './standalone-slide-toogle.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './standalone-slide-toogle.css',
})
export class StandaloneSlideToogle {
  changeEvent: IComponentEvent<boolean> = {
    change: new EventEmitter<boolean>(),
  };

  slidetoogle: BaseControl<boolean> = new SliderToggle({
    formControlName: 'slideToolDefault',
    event: this.changeEvent,
    label: 'Slide me',
    labelPosition: 'before',
  });

  slidetoogleTextAfter: BaseControl<boolean> = new SliderToggle({
    formControlName: 'slideToolAftertext',
    event: this.changeEvent,
    label: 'Slide me',
    labelPosition: 'after',
  });

  form: FormGroup;
  constructor() {
    this.form = new FormGroup({});
  }
  ngOnInit(): void {
    this.changeEvent.change?.subscribe((event) => console.log(event));
  }
}
