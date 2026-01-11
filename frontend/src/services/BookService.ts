import type { BookInterface } from '@/interfaces/BookInterface';
import axios from 'axios';

const apiURL = 'http://localhost:3000';

export class BookService {
  static async getBooks(): Promise<BookInterface[]> {
    try {
      const response = await axios.get(`${apiURL}/books`);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      return [];
    }
  }

  static async getBookById(id: number): Promise<BookInterface | undefined> {
    try {
      const response = await axios.get(`${apiURL}/books/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching book:', error);
      return undefined;
    }
  }

  static async createBook(book: BookInterface): Promise<void> {
    try {
      await axios.post(`${apiURL}/books`, book);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  }

  static async getUniqueCategories(): Promise<string[]> {
    try {
      const response = await axios.get(`${apiURL}/books/categories`);
      return response.data;
    } catch (error) {
      console.error('Error fetching unique categories:', error);
      return [];
    }
  }
}
