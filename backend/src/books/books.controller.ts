import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get('categories')
  getUniqueCategories(): Promise<string[]> {
    return this.booksService.getUniqueCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book | null> {
    return this.booksService.findOne(Number(id));
  }

  @Post()
  create(@Body() createBookDto: CreateBookDto): string {
    this.booksService.create(createBookDto);
    return 'Book created successfully';
  }
}