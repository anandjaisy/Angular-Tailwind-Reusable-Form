import { Component } from '@angular/core';
import {FalconCoreModule} from "../../../projects/falcon-ng/tailwind/src/lib/falcon-core.module";

@Component({
  selector: 'app-componenttesting',
  templateUrl: './componenttesting.component.html',
  styleUrls: ['./componenttesting.component.scss'],
  standalone: true,
  imports:[FalconCoreModule]
})
export class ComponenttestingComponent {

}
