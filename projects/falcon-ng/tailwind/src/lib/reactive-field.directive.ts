import {ComponentRef, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {BaseControl} from "./base-control";
import {FormGroup} from "@angular/forms";
import {Constant} from "./model/constant";

@Directive({
  selector: '[reactiveField]'
})
export class ReactiveFieldDirective implements OnInit {
  @Input() control!: BaseControl<string>;
  @Input() formGroup!: FormGroup;
  private componentRef!: ComponentRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    if (this.control !== undefined) {
      console.log(this.control.controlType);
      this.componentRef = this.viewContainerRef.createComponent(Constant.ComponentMapper[this.control.controlType]);
      this.componentRef.instance.control = this.control;
      this.componentRef.instance.formGroup = this.formGroup;
    }
  }

}
