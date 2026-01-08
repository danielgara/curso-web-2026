import type { BookInterface } from '@/interfaces/BookInterface';
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    books: [] as BookInterface[],
  }),
});
