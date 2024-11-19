import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Patch, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './book';
import { BookDto } from './create-book.dto';
import { UpdateBookDto } from './update-book.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }



  books : Book[] = [
    {
      id: 1,
      title: "The Lord of The Rings",
      author: "J. R. R. Tolkien",
      isbn: "9780395595114",
      publishYear: 1954,
      reserved: false
    },
    {
      id: 2,
      title: "Harry Potter and The Philosopher's Stone",
      author: "J. K. Rowling",
      isbn: "0747532699",
      publishYear: 1997,
      reserved: true
    },
    {
      id: 3,
      title: "Dune",
      author: "Frank Herbert",
      isbn: "9780593099322",
      publishYear: 1965,
      reserved: true
    }
  ]
  nextId = 4;

  @Get('books')
  listBooks(){
    return this.books
      .filter(book => book.title != null);
  };

  @Get('books/:bookid')
  listBookFromId(@Param('bookid') id : string){
    const idNumber = parseInt(id);
    const book = this.books.find(book => book.id == idNumber)

    if (!book){
      throw new NotFoundException("Couldn't find book with that ID")
    }
    return book;
  }

  @Delete('books/:bookid')
  @HttpCode(204)
  deleteBook(@Param('bookid') id : string){
    const idNumber = parseInt(id);
    const idx = this.books.findIndex(book => book.id = idNumber);
    if (idx == -1){
      throw new NotFoundException("Couldn't find book with that ID, therefore couldn't delete it")
    }

    this.books.splice(idx);
  }

  @Post('newBook')
  @HttpCode(201)
  createNewBook(@Body() newBookData : BookDto){
    const newBook : Book = {
      ...newBookData,
      id: this.nextId,
      reserved: false
    }
    this.nextId++;
    this.books.push(newBook);

    return newBook;
  }

  @Patch('updateBook/:bookid')
  @HttpCode(200)
  updateBook(@Param('bookid') id : string, @Body() newBookData : UpdateBookDto){
    const idNumber = parseInt(id);
    const originalBookId = this.books.findIndex(book => book.id == idNumber);
    const originalBook = this.books[originalBookId];

    if (originalBookId == -1){
      throw new NotFoundException("Couldn't find book with that ID, therefore couldn't update it")
    }

    const newBook : Book = {
      ...originalBook,
      ...newBookData,
    };

    this.books[originalBookId] = newBook;
    return newBook;
  }
}
