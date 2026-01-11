import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import type { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get('categories')
  getUniqueCategories(): string[] {
    return this.booksService.getUniqueCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Book | undefined {
    return this.booksService.findOne(Number(id));
  }

  @Post()
  create(@Body() createBookDto: CreateBookDto): string {
    this.booksService.create(createBookDto);
    return 'Book created successfully';
  }
}