import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/entities/book.entity';

@Module({
  imports: [BooksModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'library.db',
    entities: [Book],
    synchronize: true,
  })],
  controllers: [AppController],
})
export class AppModule {}
