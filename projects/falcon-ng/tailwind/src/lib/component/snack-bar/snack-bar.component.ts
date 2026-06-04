import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'lib-snack-bar',
    templateUrl: './snack-bar.component.html',
    styleUrls: ['./snack-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SnackBarComponent {

}
