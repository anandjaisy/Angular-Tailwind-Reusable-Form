import { Directive, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[falconValidationMessageContainer]',
  standalone: true,
  exportAs: 'falconValidationMessageContainer'
})
export class ValidationMessageContainerDirective {
container = inject(ViewContainerRef)

}
