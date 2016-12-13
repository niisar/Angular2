import {bootstrap} from 'angular2/platform/browser';
import {AppModule} from './parent.component';

platformBrowserDynamic().bootstrapModule(AppModule);
// bootstrap(ParentComponent, [])
//   .then(success => console.log(`Bootstrap success`))
//   .catch(err => console.error(err)); 