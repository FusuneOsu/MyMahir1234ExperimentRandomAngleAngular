import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]

  /*  provideBrowserGlobalErrorListeners() — Catches any global errors that occur in your app and handles them gracefully instead of crashing.

      provideRouter(routes) — Enables routing and passes in your routes (from app.routes.ts). This is what makes navigation work — without this, your <router-outlet> wouldn't work.

      provideHttpClient() — Enables HTTP requests (making API calls). Without this, you couldn't use Angular's HttpClient to fetch data from servers.

      Think of it like:
      appConfig = {
        Here's everything your app needs to work:
        - Error handling ✓
        - Navigation/routing ✓
        - Ability to make HTTP requests ✓
      }
*/
};
