import { Component } from '@angular/core';
import { FalconTailwindModule } from '../../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';

@Component({
  selector: 'app-componenttesting',
  templateUrl: './componenttesting.component.html',
  styleUrls: ['./componenttesting.component.scss'],
  standalone: true,
  imports: [FalconTailwindModule],
})
export class ComponenttestingComponent {}
