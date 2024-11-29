import {Component, Inject} from '@angular/core';
import {IDialogData} from "@falcon-ng/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
@Component({
    selector: 'lib-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    standalone: false
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData) {}
}
