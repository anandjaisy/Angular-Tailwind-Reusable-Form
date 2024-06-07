import { Injectable } from '@angular/core';
import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorStateMatcherService implements ErrorStateMatcher{
  isErrorState(control: AbstractControl<any, any> | null, form: NgForm | FormGroupDirective | null): boolean {
    return Boolean(control && control.invalid && (form && form.submitted));
  }
}
