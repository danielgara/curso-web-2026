import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  findOne(id: number): Promise<Book | null> {
    return this.booksRepository.findOne({ where: { id } });
  }

  create(createBookDto: CreateBookDto): void {
    this.booksRepository.save(createBookDto);
  }

  getUniqueCategories(): Promise<string[]> {
    return this.booksRepository.createQueryBuilder('book')
      .select('DISTINCT category')
      .getRawMany()
      .then(categories => categories.map(category => category.category));
  } 
}