import type { Request, Response } from 'express';
import { books } from '../data/books';
import { Book } from '../models/Book';

export class BooksController {
  static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Books";
    viewData["books"] = books;

    res.render('books/index', { viewData: viewData });
  }

  static show(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Book";
    viewData["book"] = Book.findById(books, parseInt(req.params.id));

    res.render('books/show', { viewData: viewData });
  }
}