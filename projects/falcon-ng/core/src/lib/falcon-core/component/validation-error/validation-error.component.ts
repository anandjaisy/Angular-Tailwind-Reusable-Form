import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { CommonModule, KeyValue } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ErrorMessagePipe } from './error-message.pipe';

@Component({
  selector: 'falcon-error',
  imports: [CommonModule, MatInputModule, ErrorMessagePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (errors) { @for (error of errors | keyvalue; track trackByFn($index,
    error)) {
    <mat-error [style.bottom.px]="18" [style.position]="'relative'">{{
      error.key | errorMessage : error.value
    }}</mat-error>
    } }
  `,
})
export class ValidationErrorComponent {
  @Input() errors: ValidationErrors | undefined | null = null;

  trackByFn(index: number, item: KeyValue<string, any>) {
    return item.key;
  }
}
