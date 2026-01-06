import { Router } from 'express';
import { HomeController } from '../controllers/HomeController';
import { BooksController } from '../controllers/BooksController';

export default class Routes {
  static initializeRoutes(): Router {
    const router = Router();
    
    router.get('/', HomeController.index);
    router.get('/about', HomeController.about);
    router.get('/books', BooksController.index);
    router.get('/books/:id', BooksController.show);
    return router;
  }
}