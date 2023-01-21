import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FalconCoreModule } from '../../../../../projects/falcon-ng/tailwind/src/lib/falcon-core.module';

@Component({
  selector: 'app-code-button',
  templateUrl: './code-button.component.html',
  styleUrls: ['./code-button.component.scss'],
  standalone: true,
  imports: [FalconCoreModule],
})
export class CodeButtonComponent {
  @Output() buttonClickEvent = new EventEmitter<string>();
  constructor() {}

  buttonClickEmitter() {
    this.buttonClickEvent.emit();
  }
}
