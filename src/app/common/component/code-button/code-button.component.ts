import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FalconTailwindModule } from '../../../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';

@Component({
    selector: 'app-code-button',
    templateUrl: './code-button.component.html',
    styleUrls: ['./code-button.component.scss'],
    imports: [FalconTailwindModule]
})
export class CodeButtonComponent {
  @Output() buttonClickEvent = new EventEmitter<string>();
  constructor() {}

  buttonClickEmitter() {
    this.buttonClickEvent.emit();
  }
}
