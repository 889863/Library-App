import { TestBed, inject, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { of, Observable } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './admin.component';
import { BookService } from '../../book.service';
const response = [{"author":"Chinua Achebe","country":"Nigeria","imageLink":"images/things-fall-apart.jpg","language":"English","link":"https://en.wikipedia.org/wiki/Things_Fall_Apart\n","pages":209,"title":"Things Fall Apart","year":1958},{"author":"Hans Christian Andersen","country":"Denmark","imageLink":"images/fairy-tales.jpg","language":"Danish","link":"https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n","pages":784,"title":"Fairy tales","year":1836},{"author":"Dante Alighieri","country":"Italy","imageLink":"images/the-divine-comedy.jpg","language":"Italian","link":"https://en.wikipedia.org/wiki/Divine_Comedy\n","pages":928,"title":"The Divine Comedy","year":1315},{"author":"Unknown","country":"Sumer and Akkadian Empire","imageLink":"images/the-epic-of-gilgamesh.jpg","language":"Akkadian","link":"https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n","pages":160,"title":"The Epic Of Gilgamesh","year":-1700}];

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgxPaginationModule, Ng2SearchPipeModule],
      declarations: [ AdminComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should test getTheCompleteBookList method - Success ", async(() => {
    let bookService = TestBed.get(BookService);
    spyOn(bookService, 'getBookList').and.returnValue(of(response))
    component.getTheCompleteBookList();
    fixture.detectChanges();
   expect(component.bookList).toEqual(response);
  }));

  it("should test getTheCompleteBookList method - Error ", async(() => {
    let bookService = TestBed.get(BookService);
    spyOn(bookService, 'getBookList').and.returnValue(throwError(new Error('Test error')));
    component.getTheCompleteBookList();
    fixture.detectChanges();
  }));
});
