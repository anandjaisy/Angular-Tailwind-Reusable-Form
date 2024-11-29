import {Component, Input} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ProgressBarMode} from "@angular/material/progress-bar";

@Component({
    selector: 'falcon-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss'],
    standalone: false
})
export class ProgressBarComponent {
  @Input() bufferValue!: number;
  @Input() color: ThemePalette;
  @Input() mode!: ProgressBarMode;
  @Input() value!: number;
}
