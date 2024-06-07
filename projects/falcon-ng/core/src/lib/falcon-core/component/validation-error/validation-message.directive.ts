import { ComponentRef, Directive, ElementRef, inject, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { ControlContainer, FormGroupDirective, NgControl, NgForm, NgModel } from '@angular/forms';
import { EMPTY, fromEvent, iif, merge, skip, startWith, Subscription } from 'rxjs';
import { ValidationErrorComponent } from './validation-error.component';

@Directive({
  standalone: true,
  selector: '[ngModel]:not([withoutValidationErrors]),[formControl]:not([withoutValidationErrors]),[formControlName]:not([withoutValidationErrors]),[formGroupName]:not([withoutValidationErrors]),[ngModelGroup]:not([withoutValidationErrors])',
})
export class ValidationMessageDirective implements OnInit, OnDestroy {
  ngControl = inject(NgControl, {self:true, optional: true}) || inject(ControlContainer, {self: true});
  elementRef= inject(ElementRef);

  @Input() errorStateMatcher = inject(ErrorStateMatcher);
  @Input() container = inject(ViewContainerRef);

  private parentContainer = inject(ControlContainer, { optional: true });
  private errorMessageTrigger!: Subscription;
  private componentRef: ComponentRef<ValidationErrorComponent> | null = null;

  get form() {
    return this.parentContainer?.formDirective as NgForm | FormGroupDirective | null;
  }

  ngOnInit() {
    queueMicrotask(() => {
      if (!this.ngControl.control)
        throw Error(`No control model for ${this.ngControl.name} control...`);
      this.errorMessageTrigger = merge(
        this.ngControl.control.statusChanges,
        fromEvent(this.elementRef.nativeElement, 'blur'),
        iif(() => !!this.form, this.form!.ngSubmit, EMPTY)
      ).pipe(
        startWith(this.ngControl.control.status),
        skip(this.ngControl instanceof NgModel ? 1 : 0),
      ).subscribe(() => {
        if (this.errorStateMatcher.isErrorState(this.ngControl.control, this.form)) {
          if (!this.componentRef) {
            this.componentRef = this.container.createComponent(ValidationErrorComponent);
            this.componentRef.changeDetectorRef.markForCheck();
          }
          this.componentRef.setInput('errors', this.ngControl.errors);
        } else {
          this.componentRef?.destroy();
          this.componentRef = null;
        }
      })

    })
  }

  ngOnDestroy() {
    this.errorMessageTrigger.unsubscribe();
  }

}
