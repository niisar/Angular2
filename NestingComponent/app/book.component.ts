import {Component, Input } from 'angular2/core';
import { Book } from './book';

@Component({
  selector:'my-book',
  templateUrl:'app/book.component.html'
})

export class BookComponent{
  @Input() book: Book;
}