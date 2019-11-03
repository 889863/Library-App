import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book.service';
class bookItem {
  constructor(
    public author: string,
    public country: string,
    public imageLink: string,
    public language: string,
    public link: string,
    public pages: Number,
    public title: string,
    public year: Number
  ) {}
}
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
