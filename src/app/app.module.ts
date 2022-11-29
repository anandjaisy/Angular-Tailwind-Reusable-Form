import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextboxComponent } from './textbox/textbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenttestingComponent } from './componenttesting/componenttesting.component';
import {FalconCoreModule} from "../../projects/falcon-ng/tailwind/src/lib/falcon-core.module";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    ComponenttestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FalconCoreModule.forRoot(environment),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
