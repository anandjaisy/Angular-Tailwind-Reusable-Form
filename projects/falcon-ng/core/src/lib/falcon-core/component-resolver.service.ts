import { Injectable, Type } from '@angular/core';
import { TextboxComponent } from './component/textbox/textbox.component';
import { TextareaComponent } from './component/textarea/textarea.component';

export type ControlType = 'textbox' | 'textarea';

type DynamicControlMap = { [T in ControlType]: Type<any> };

@Injectable({
  providedIn: 'root',
})
export class ComponentResolver {
  private controlComponents: DynamicControlMap = {
    textbox: TextboxComponent,
    textarea: TextareaComponent,
  };

  public resolver(controlTypes: keyof DynamicControlMap) {
    return this.controlComponents[controlTypes];
  }
}
