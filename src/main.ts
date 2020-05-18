import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic()
  .bootstrapModule(AppModule, { preserveWhitespaces: false })
  // tslint:disable-next-line:no-console - there's not much we can do here otherwise
  .catch(e => console.error(e));
