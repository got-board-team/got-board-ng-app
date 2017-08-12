import 'core-js/es7/reflect';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../dist/aot/ngfactory/src/app/app.module.ngfactory';

console.log('Bootstraping with AOT.');

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);