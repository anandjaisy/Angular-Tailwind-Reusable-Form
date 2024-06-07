import { ValidatorFn, Validators } from '@angular/forms';

/**
 * @description
 * Interface use for validation config.
 * @usageNotes
 * ```ts
 *       validations: [
 *        {
 *          name: "required",
 *          validator: Validators.required,
 *          message: "Required Field"
 *        }]
 * ```
 */
export declare interface IValidator {
  name?: string;
  validator: ValidatorFn;
  message?: string;
}
