import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TextboxComponent} from './textbox/textbox.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponenttestingComponent} from './componenttesting/componenttesting.component';
import {FalconCoreModule} from "../../projects/falcon-ng/tailwind/src/lib/falcon-core.module";
import {environment} from "../environments/environment";
import {CodeButtonComponent} from "./common/component/code-button/code-button.component";
import {HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions} from "ngx-highlightjs";
import {CodeGeneratorComponent} from "./common/component/code-generator/code-generator.component";
import {InputErrorComponent} from "./textbox/input-error/input-error.component";
import {InputFloatingLabelComponent} from "./textbox/input-floating-label/input-floating-label.component";
import {InputHintComponent} from "./textbox/input-hint/input-hint.component";
import {InputPrefixSuffixComponent} from "./textbox/input-prefix-suffix/input-prefix-suffix.component";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpFalconInterceptor} from "../../projects/falcon-ng/tailwind/src/lib/service/http/httpInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    TextboxComponent,
    ComponenttestingComponent,
    CodeButtonComponent,
    CodeGeneratorComponent,
    InputErrorComponent,
    InputFloatingLabelComponent,
    InputHintComponent,
    InputPrefixSuffixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FalconCoreModule.forRoot(environment),
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpFalconInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
