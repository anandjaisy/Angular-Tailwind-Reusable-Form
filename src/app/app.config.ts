import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { FalconTailwindModule } from '../../projects/falcon-ng/tailwind/src/lib/falcon-tailwind.module';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(FalconTailwindModule.forRoot(environment)),
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideAnimations(),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        },
      },
    },
  ],
};
