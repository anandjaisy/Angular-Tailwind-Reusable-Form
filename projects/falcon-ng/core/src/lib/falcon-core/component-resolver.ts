import { Injectable, Type } from '@angular/core';
import { from, of, tap } from 'rxjs';
import { Control} from './model/enum';

type DynamicControlMap = { [T in Control]: () => Promise<Type<any>> };

@Injectable({
  providedIn: 'root',
})
export class ComponentResolver {
  private loadedControlCompoments = new Map<Control, Type<any>>();
  private lazyControlComponents: DynamicControlMap = {
    textbox: () => import('./component/textbox/textbox.component').then(c => c.TextboxComponent),
    textarea: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    select: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    datepicker: ()=> import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    radio: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    checkbox: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    button: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    slideToggle: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    slider: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    buttonToggle: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    autocomplete: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    chip: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    editor: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
    divider: () => import('./component/textarea/textarea.component').then(c=> c.TextareaComponent),
  };

  public resolver(controlType: keyof DynamicControlMap) {
    const loadedComponent = this.loadedControlCompoments.get(controlType)
    if (loadedComponent)
      return of(loadedComponent);
    return from(this.lazyControlComponents[controlType]()).pipe(
      tap(comp => this.loadedControlCompoments.set(controlType, comp))
    );
  }
}
