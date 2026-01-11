import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CreateBook } from './interfaces/create-book.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [
    { id: 1, title: 'The Great Gatsby', category: 'Fiction', price: 10.99, stock: 10 },
    { id: 2, title: 'Clean Code', category: 'Programming', price: 20.99, stock: 20 },
    { id: 3, title: 'Sapiens', category: 'History', price: 30.99, stock: 30 },
  ];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  create(book: CreateBook): void {
    this.books.push({
      id: this.books.length + 1,
      ...book,
    });
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.books.map((book) => book.category))].sort();
  }
}