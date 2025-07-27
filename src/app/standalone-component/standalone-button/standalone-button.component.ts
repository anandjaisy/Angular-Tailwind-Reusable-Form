import { Component } from '@angular/core';
import { FalconCoreModule } from '../../../../projects/falcon-ng/core/src/lib/falcon-core/falcon-core.module';
@Component({
  selector: 'app-standalone-button',
  imports: [FalconCoreModule],
  templateUrl: './standalone-button.component.html',
  styleUrl: './standalone-button.component.scss',
})
export class StandaloneButtonComponent {}
