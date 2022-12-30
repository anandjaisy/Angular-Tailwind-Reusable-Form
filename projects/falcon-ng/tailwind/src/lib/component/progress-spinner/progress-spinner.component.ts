import {Component, Input} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
  selector: 'falcon-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent {
  @Input() diameter: number = 100;
  @Input() color: ThemePalette;
  @Input() mode!: ProgressSpinnerMode;
  @Input() value!: number;
  @Input() strokeWidth: number = 5;
}
