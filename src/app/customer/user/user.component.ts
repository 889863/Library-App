import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book.service';
import { bookItem } from '../../book';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  constructor(private bookService: BookService) { }
  bookList:bookItem[];
  bookListOriginal:bookItem[];
  sortOptions: string[] = ['Title', 'Author', 'Country', 'Language'];
  selectedSort:string;
  ngOnInit() {
    this.getTheBookList();
  }

  getTheBookList() {
    this.bookService.getBookList().subscribe((res: any) => {
      this.bookList = res;
      this.bookListOriginal = res;
    },
      (error) => {
      }
    );
  }

  sortBooks(option){
    this.selectedSort = option;
    option = option.toLowerCase();
    console.log(option);
    this.bookList = Array.from(this.bookListOriginal);
    this.bookList.sort((a, b) => (a[option] > b[option]) ? 1 : -1)

  }

  readMore(url) {
    window.open(url, '_blank');
  }
  

}
