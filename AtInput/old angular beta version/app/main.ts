import {bootstrap} from 'angular2/platform/browser';
import {ParentComponent} from './parent.component';

bootstrap(ParentComponent, [])
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err)); 