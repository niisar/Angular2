import { Component } from 'angular2/core';
import { Book } from './book';
import {BookComponent} from './book.component';
@Component({
  selector: 'my-book-list',
  templateUrl: 'app/book-list.component.html',
  directives: [BookComponent]
}) 

export class BookListComponent{
  books = [
    new Book(1,'Book 1'),
    new Book(2,'Book 2'),
    new Book(3, 'Book 3'),
    new Book(4, 'Book 4')
  ]; 
   
  select(book:Book){
    console.log(book)
    this.selectedBook = book;
  }
}
