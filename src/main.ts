import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {HIGHLIGHT_OPTIONS} from "ngx-highlightjs";
import {importProvidersFrom} from "@angular/core";
import {FalconCoreModule} from "../projects/falcon-ng/tailwind/src/lib/falcon-core.module";
import {environment} from "./environments/environment";
import {RouterModule} from "@angular/router";
import {routes} from "./app/app-routing.module";
import {provideAnimations} from "@angular/platform-browser/animations";


bootstrapApplication(AppComponent,{
  providers:[importProvidersFrom(FalconCoreModule.forRoot(environment)),
             importProvidersFrom(RouterModule.forRoot(routes)),
             provideAnimations()
    ,{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        xml: () => import('highlight.js/lib/languages/xml'),
        typescript: () => import('highlight.js/lib/languages/typescript'),
        scss: () => import('highlight.js/lib/languages/scss'),
      }
    }
  }]
}).catch(err => console.error(err));
