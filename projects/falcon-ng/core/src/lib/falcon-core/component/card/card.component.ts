import { Component, Input } from '@angular/core';

@Component({
    selector: 'fal-card',
    host: {
        '[style.--mdc-elevated-card-container-shape]': '"10px"',
        '[style.--mdc-elevated-card-container-elevation]': '"0px 0px 0px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(0, 0, 0, 0.12), 0px 0px 1px 1px rgba(0.12, 0.12, 0.12, 0.12)"',
    },
    template: `
    <mat-card [ngClass]="class" [style.backgroundColor]="backgroundColor">
      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>
    </mat-card>
  `,
    standalone: false
})
export class CardComponent {
  @Input({ required: false }) backgroundColor: string | undefined = undefined;
  @Input({ required: false }) class: string | undefined = undefined;
}
