import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book.service';
import { bookItem } from '../../book';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  constructor(private bookService: BookService) { }
  bookList:bookItem[];
  bookListOriginal:bookItem[];
  ngOnInit() {
    this.getTheCompleteBookList();
  }

  getTheCompleteBookList() {
    this.bookService.getBookList().subscribe((res: any) => {
      this.bookList = res;
      this.bookListOriginal = res;
    },
      (error) => {
      }
    );
  }

}
