import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookList() : Observable<bookItem[]>{    
    return this.http.get<bookItem[]>('../assets/json/book.json');
  }
  
}
