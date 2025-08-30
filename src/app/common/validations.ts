import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class CustomValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if (control.value != null || control.value != undefined) {
      if ((control.value as string).indexOf(' ') >= 0) {
        return { custom: true };
      }
    }
    return null;
  }
}

export function banWords(message: string): ValidatorFn {
  return (control: AbstractControl<string | null>): ValidationErrors | null => {
    if (control.value != null || control.value != undefined) {
      if ((control.value as string).indexOf(' ') >= 0) {
        return { custom: { message: message } };
      }
    }
    return null;
  };
}
