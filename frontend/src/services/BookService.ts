import { books } from '@/data/books';
import type { BookInterface } from '@/interfaces/BookInterface';

export class BookService {
  static getBooks(): BookInterface[] {
    return books;
  }

  static getBookById(id: number): BookInterface | undefined {
    return books.find((book) => book.id === id);
  }

  static getNextId(): number {
    const lastBook = books[books.length - 1];
    return lastBook ? lastBook.id + 1 : 1;
  }

  static createBook(book: BookInterface): void {
    books.push(book);
  }
}