import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'fal-button',
  template: `
    <button
      [matButton]="appearance"
      [type]="type"
      (click)="onClick($event)"
      [disabled]="disabled"
      class="w-full"
    >
      <span class="flex items-center justify-center gap-2 mdc-button__label">
        <ng-content></ng-content>
        <span class="mt-1">{{ label }}</span>
      </span>
    </button>
  `,
  standalone: false,
})
export class ButtonComponent implements OnDestroy {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) type: 'submit' | 'reset' | 'button' = 'submit';
  @Input() appearance: 'elevated' | 'outlined' | 'filled' | 'tonal' | '' = '';
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
