import { TextboxComponent } from '../component/textbox/textbox.component';
import { TextareaComponent } from '../component/textarea/textarea.component';
import { SelectComponent } from '../component/select/select.component';
import { DatePickerComponent } from '../component/date-picker/date-picker.component';
import { RadioComponent } from '../component/radio/radio.component';
import { CheckboxComponent } from '../component/checkbox/checkbox.component';
import { SlideToggleComponent } from '../component/slide-toggle/slide-toggle.component';
import { SliderComponent } from '../component/slider/slider.component';
import { ButtonToggleComponent } from '../component/button-toggle/button-toggle.component';
import { AutoCompleteComponent } from '../component/auto-complete/auto-complete.component';
import { ChipComponent } from '../component/chips/chip.component';
import {ButtonComponent} from "../component/button/button.component";
import {RichTextEditorComponent} from "../component/rich-text-editor/rich-text-editor.component";

export class Constant {
  public static ComponentMapper = [
    TextboxComponent,
    TextareaComponent,
    SelectComponent,
    DatePickerComponent,
    RadioComponent,
    CheckboxComponent,
    ButtonComponent,
    SlideToggleComponent,
    SliderComponent,
    ButtonToggleComponent,
    AutoCompleteComponent,
    ChipComponent,
    RichTextEditorComponent,
    //DividerComponent,
  ];
}
