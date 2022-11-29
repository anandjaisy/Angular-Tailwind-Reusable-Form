import {Observable} from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {BaseControl, Layout} from './base-control';
import {inject} from '@angular/core';
import {IValidator} from './model/ivalidator';
import {ControlType} from './model/enum';

/**
 * @description
 * Base form component initialized to create form controls, set validation, submit.
 *
 * @usageNotes
 * The following snippet shows how a component can implement this abstract class to
 * define its own initialization method.
 * ```ts
 *  export class InputComponent extends BaseFormComponent<any> implements OnInit {
 *     constructor(fb : FormBuilder) {
 *        super(fb);
 *        this.defineForm();
 *    }
 *    protected defineForm(): void {
 *    }
 *    ngOnInit(): void {
 *      this.formGroup = this.createControls();
 *    }
 *    protected submitDatasource(model: any): Observable<any> {
 *      return of(model);
 *    }
 * ```
 */
export abstract class BaseFormComponent<T> {
  public formGroup!: FormGroup;

  protected abstract defineForm(): void;

  protected abstract submitDataSource(model: T): Observable<T>;

  public dataSource: T | undefined = undefined;
  public controlsConfig!: Layout<T>;
  public showLoading: boolean = false;
  protected fb = inject(FormBuilder);

  constructor() {
  }

  /**
   * @description
   * Method evoke on when the form is submitted.
   * @returns submitDatasource() method with form data if valid otherwise form invalid.
   */
  public onSubmit() {
    if (this.formGroup !== undefined && this.formGroup.valid) {
      this.submitDataSource(this.formGroup.value);
    } else {
      this.validateAllFormFields(this.formGroup);
    }
  }

  /**
   * @description
   * Private method to validate all form controls before is form submited.
   * @param formGroup Validate form group.
   * @returns Groups of controls added to the form builder.
   */
  private validateAllFormFields(formGroup: FormGroup) {
    if (this.formGroup !== undefined) this.formGroup.markAllAsTouched();
  }

  /**
   * @description
   * Create the reactive form controls
   * @returns Groups of controls added to the form builder.
   */
  protected createControls() {
    const group = this.fb.group({});
    this.controlsConfig.baseControls.forEach((controls, index) => {
      this.bindControl(controls, group, index);
    });
    return group;
  }

  /**
   * @description
   * Private method to bind the form control.
   * @param field field to bind.
   * @param group group to add.
   * @param index index of the layout
   */
  private bindControl(
    controlConfig: BaseControl<T>,
    group: FormGroup,
    index: number
  ) {
    if (controlConfig.controlType === ControlType.Button) return;
    var control = null;
    //    if (controlConfig.formArray !== undefined) {
    //      control =
    //        controlConfig.formArray.length > 0
    //          ? this.fb.array([
    //            this.createFormArrayGroup(
    //              controlConfig.formArray[
    //              controlConfig.formArray.length - 1
    //                ].componentConfig,
    //            ),
    //          ])
    //          : this.fb.array(
    //            [],
    //            this.bindValidations(controlConfig.validations || []),
    //          );
    //    } else {
    control = this.fb.control(
      {
        value: controlConfig.value,
        disabled: controlConfig.disabled,
      },
      this.bindValidations(controlConfig.validations || [])
    );
    //}
    group.addControl(controlConfig.key, control);
  }

  /**
   * @description
   * Private method to bind the validation to the form controls on form submit.
   * @param validations Push the validation to the controls.
   * @returns Validation.
   */
  private bindValidations(validations: IValidator[]) {
    if (validations.length > 0) {
      const validList: (ValidatorFn | null | undefined)[] = [];
      validations.forEach((valid: IValidator) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  /**
   * Create an form array element
   * @param layoutConfig layout of form array
   * @returns Form array group
   */
  //  private createFormArrayGroup(
  //    componentConfig: IComponentConfig[],
  //  ): UntypedFormGroup {
  //    var formGroup: UntypedFormGroup = this.fb.group({});
  //    componentConfig.forEach((item, index) => {
  //      var control = null;
  //      if (item.formArray !== undefined) {
  //        control =
  //          item.formArray.length > 0
  //            ? this.fb.array(
  //              [
  //                this.createFormArrayGroup(
  //                  item.formArray[item.formArray.length - 1]
  //                    .componentConfig,
  //                ),
  //              ],
  //              this.bindValidations(item.validations || []),
  //            )
  //            : this.fb.array(
  //              [],
  //              this.bindValidations(item.validations || []),
  //            );
  //      } else {
  //        control = this.fb.control(
  //          {
  //            value: item.componentProperty.value,
  //            disabled: item.componentProperty.disabled,
  //          },
  //          this.bindValidations(item.validations || []),
  //        );
  //      }
  //      formGroup.addControl(item.formControlName, control);
  //    });
  //    return formGroup;
  //  }

  /**
   * @description
   * Reset fild values to default or specify some value.
   * @param defaultValues Specify the specific value to set to the controls.
   * @returns void.
   */
  public reset(defaultValues?: any): void {
    this.formGroup.reset(defaultValues);
  }

  /**
   * @description
   * Reset specific fild Errors.
   * @param name Name of the field to reset the error.
   * @returns void.
   */
  resetFieldErrors(name: string): void {
    this.formGroup?.get(name)?.setErrors(null);
  }

  /**
   * @description
   * Get the controls value from the form.
   * @returns Form controls values.
   */
  get value(): any {
    return this.formGroup.value;
  }

  /**
   * @description
   * Updating parts of the data model.
   * Use the patchValue() method to replace any properties defined in the object that have changed in the form model.
   * @returns Form controls values.
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   *  @usageNotes
   * The following snippet shows how a component can implement this abstract class to
   * define its own initialization method.
   * ```ts
   *   this.formGroup.patchValue({
   *     name: 'Todd Motto',
   *     event: {
   *       title: 'AngularCamp 2016',
   *       location: 'Barcelona, Spain'
   *     }
   *   });
   * ```
   */
  protected patchValue(
    value: { [key: string]: any },
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ) {
    return this.formGroup.patchValue(value, options);
  }

  /**
   * @description
   * Updating parts of the data model.
   * Use the setValue() method to set a new value for an individual control. The setValue() method strictly adheres to the structure of the form group and replaces the entire value for the control.
   * @returns Form controls values.
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   *  @usageNotes
   * The following snippet shows how a component can implement this abstract class to
   * define its own initialization method.
   * ```ts
   *   this.formGroup.setValue({
   *     name: 'Todd Motto',
   *     event: {
   *       title: 'AngularCamp 2016',
   *       location: 'Barcelona, Spain'
   *     }
   *   });
   * ```
   */
  protected setValue(
    value: { [key: string]: any },
    options?: { onlySelf?: boolean; emitEvent?: boolean }
  ) {
    return this.formGroup.setValue(value, options);
  }

  /**
   * @description
   * Dynamically remove the form control.
   * @param index Index of item.
   * @usageNotes
   * The following snippet shows how to remove the form control from Froup Group
   * ```ts
   *    removeControl(1);
   * ```
   */
  protected removeControl(layoutIndex: number, index: number) {
    this.formGroup.removeControl(this.controlsConfig.baseControls[layoutIndex].key);
    this.controlsConfig.baseControls.splice(index, 1);
  }

  /**
   * @description
   * Dynamically add the form control.
   * @param configToAdd Configuration of the form control.
   * @param index Add controls to the specific index.
   * @usageNotes
   * The following snippet shows how a component can implement this abstract class to
   * define its own initialization method.
   * ```ts
   *   var configToadd = {
   *    componentProperty: {
   *      label: "Outline Auto complete",
   *      options: [{ value: 'Extra-cheese', viewValue: 'Extra cheese' },
   *      { value: 'Bellsprout', viewValue: 'Bellsprout' },
   *      { value: 'Mushroom', viewValue: 'Mushroom' },
   *      { value: 'Onion', viewValue: 'Onion' },
   *      { value: 'Pepperoni', viewValue: 'Pepperoni' },
   *      { value: 'Sausage', viewValue: 'Sausage' },
   *      { value: 'Tomato', viewValue: 'Tomato' }],
   *      appearance: Appearance.Outline,
   *      color: 'accent'
   *    },
   *    componentType: ComponentType.AutoComplete,
   *    formControlName: "test"
   *  };
   *  this.addControl(configToadd); or this.addControl(configToadd,1);
   * ```
   */
//  protected addControl(layoutToAdd?: BaseControl<string>[],index?: number) {
//    layoutToAdd.forEach((layout, layoutIndex) => {
//      layout.componentConfig.forEach(
//        (componentConfig, componentIndex) => {
//          if (componentConfig.formArray !== undefined) {
//            componentConfig.formArray.forEach((control) => {
//              this.formGroup.setControl(
//                'productOption',
//                this.createFormArrayGroup(control.componentConfig),
//              );
//              this.controlsConfig.container.layoutConfig[1].componentConfig[0].formArray.push(
//                layout,
//              );
//            });
//          } else {
//            this.formGroup.addControl(
//              componentConfig.formControlName,
//              new UntypedFormControl(
//                {
//                  value: componentConfig.componentProperty.value,
//                  disabled:
//                  componentConfig.componentProperty.disabled,
//                },
//                this.bindValidations(
//                  componentConfig.validations || [],
//                ),
//              ),
//            );
//            index !== null
//              ? this.controlsConfig.container.layoutConfig.splice(
//                index,
//                0,
//                layout,
//              )
//              : this.controlsConfig.container.layoutConfig.push(
//                layout,
//              );
//          }
//        },
//      );
//    });
//  }
}
