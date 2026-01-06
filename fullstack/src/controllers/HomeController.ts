import type { Request, Response } from 'express';

export class HomeController {
  static index(req: Request, res: Response): void {
    res.render('home/index');
  }

  static about(req: Request, res: Response): void {
    res.render('home/about');
  }
}