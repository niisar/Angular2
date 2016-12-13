//main entry point
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FormsModule }   from '@angular/forms';
import {AppModule} from './app';

platformBrowserDynamic().bootstrapModule(AppModule)