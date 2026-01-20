import { Injectable, Type } from '@angular/core';
import { from, of, tap } from 'rxjs';
import { Control } from './model/enum';

type DynamicControlMap = { [T in Control]: () => Promise<Type<any>> };

@Injectable({
  providedIn: 'root',
})
export class ComponentResolver {
  private loadedControlCompoments = new Map<Control, Type<any>>();
  private lazyControlComponents: DynamicControlMap = {
    textbox: () => import('./component/textbox/textbox.component').then((c) => c.TextboxComponent),
    textarea: () =>
      import('./component/textarea/textarea.component').then((c) => c.TextareaComponent),
    select: () => import('./component/select/select.component').then((c) => c.SelectComponent),
    datepicker: () =>
      import('./component/datepicker/datepicker.component').then((c) => c.DatepickerComponent),
    radio: () => import('./component/radio/radio.component').then((c) => c.RadioComponent),
    checkbox: () =>
      import('./component/checkbox/checkbox.component').then((c) => c.CheckboxComponent),
    button: () => import('./component/button/button.component').then((c) => c.ButtonComponent),
    slideToggle: () => import('./component/slide-toggle/slide-toggle').then((c) => c.SlideToggle),
    slider: () =>
      import('./component/textarea/textarea.component').then((c) => c.TextareaComponent),
    buttonToggle: () =>
      import('./component/textarea/textarea.component').then((c) => c.TextareaComponent),
    autocomplete: () =>
      import('./component/autocomplete/autocomplete.component').then(
        (c) => c.AutocompleteComponent
      ),
    chip: () => import('./component/textarea/textarea.component').then((c) => c.TextareaComponent),
    editor: () =>
      import('./component/textarea/textarea.component').then((c) => c.TextareaComponent),
    divider: () =>
      import('./component/textarea/textarea.component').then((c) => c.TextareaComponent),
  };

  public resolver(controlType: keyof DynamicControlMap) {
    const loadedComponent = this.loadedControlCompoments.get(controlType);
    if (loadedComponent) return of(loadedComponent);
    return from(this.lazyControlComponents[controlType]()).pipe(
      tap((comp) => this.loadedControlCompoments.set(controlType, comp))
    );
  }
}
