import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {IDialogData} from "../../../projects/falcon-ng/tailwind/src/lib/model/interface";
import {AngularCodeTemplateViewModel} from "../common/angularCodeTemplateViewModel";
import {AngularCodeTemplate} from "../common/angularCodeTemplate";
import {DialogComponent} from "../../../projects/falcon-ng/tailwind/src/lib/component/dialog/dialog.component";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {
  private iDialogData: IDialogData = {} as IDialogData;
  public codeGeneratorEnable: boolean = false;
  public angularCodeTemplateViewModel: AngularCodeTemplateViewModel =
  new AngularCodeTemplateViewModel();
  constructor(public dialog: MatDialog) {}
  async openDialog() {
    this.iDialogData.bodyMessage =
    'Are you sure you want to delete ?';
    this.iDialogData.cancelBtnText = 'Cancel';
    this.iDialogData.mainbtnText = 'Delete';
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: this.iDialogData,
    });
    await dialogRef.afterClosed().subscribe((result) => {});
  }
  buttonClickEvent() {
    this.angularCodeTemplateViewModel.tsConfig =
    AngularCodeTemplate.Delete_Dialog_TS_KEY;
    this.angularCodeTemplateViewModel.htmlConfig =
    AngularCodeTemplate.Delete_Dialog_HTML_KEY;
    this.codeGeneratorEnable = !this.codeGeneratorEnable;
  }
}
