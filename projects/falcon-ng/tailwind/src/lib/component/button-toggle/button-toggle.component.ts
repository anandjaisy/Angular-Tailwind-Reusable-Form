import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {BaseControl} from "@falcon-ng/core"

@Component({
    selector: 'falcon-button-toggle',
    templateUrl: './button-toggle.component.html',
    styleUrls: ['./button-toggle.component.scss'],
    standalone: false
})
export class ButtonToggleComponent implements OnInit {
  control!: BaseControl<string>;
  formGroup!: FormGroup;
  @Output() toggleGroupChange: EventEmitter<MatButtonToggleChange> = new EventEmitter<MatButtonToggleChange>();
  ngOnInit(): void {
    if (this.formGroup === undefined) {
      this.formGroup = new FormGroup({
        default: new FormControl()
      });
    }
  }

  toggleChange($event: any) {
    this.toggleGroupChange.emit($event.value);
  }
}
