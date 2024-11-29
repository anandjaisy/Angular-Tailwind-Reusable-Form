import {
  Component,
  EventEmitter,
  Input,
  input,
  OnDestroy,
  Output,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'fal-button',
    template: `
    <button
      mat-flat-button
      [color]="color"
      [type]="type"
      (click)="onClick($event)"
      [disabled]="disabled">
      {{ label }}
    </button>
  `,
    standalone: false
})
export class ButtonComponent implements OnDestroy {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) type: 'submit' | 'reset' | 'button' = 'submit';
  @Input() color: ThemePalette = 'primary';
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter<MouseEvent>();

  ngOnDestroy(): void {
    this.click.complete();
  }
  onClick(event: MouseEvent) {
    if (['reset', 'submit'].includes(this.type)) {
      this.click.emit(event);
      return true;
    }
    return false;
  }
}
