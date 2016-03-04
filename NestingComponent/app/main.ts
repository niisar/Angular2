import { bootstrap } from 'angular2/platform/browser';
import {BookListComponent} from './book-list.component';

bootstrap(BookListComponent)
  .then(success => console.log('Bootstrap success'))
  .catch(error => console.log(error))