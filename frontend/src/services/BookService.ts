import type { BookInterface } from '@/interfaces/BookInterface';
import { useAppStore } from '@/store/appstore';

export class BookService {
  static getBooks(): BookInterface[] {
    return useAppStore().books;
  }

  static getBookById(id: number): BookInterface | undefined {
    return useAppStore().books.find((book) => book.id === id);
  }

  static getNextId(): number {
    const lastBook = useAppStore().books[useAppStore().books.length - 1];
    return lastBook ? lastBook.id + 1 : 1;
  }

  static createBook(book: BookInterface): void {
    useAppStore().books.push(book);
  }
}
