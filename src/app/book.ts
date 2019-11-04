export class bookItem {
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