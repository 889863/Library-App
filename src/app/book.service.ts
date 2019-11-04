import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { bookItem } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookList() : Observable<bookItem[]>{    
    return this.http.get<bookItem[]>('../assets/json/book.json');
  }
  
}
