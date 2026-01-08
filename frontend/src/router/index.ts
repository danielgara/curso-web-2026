import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BooksIndexView from '@/views/BooksIndexView.vue';
import BooksShowView from '@/views/BooksShowView.vue';
import PlaygroundView from '@/views/PlaygroundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
    { path: '/about', name: 'about', component: AboutView, meta: { title: 'About' } },
    { path: '/books', name: 'books.index', component: BooksIndexView, meta: { title: 'Books' } },
    { path: '/books/:id', name: 'books.show', component: BooksShowView, meta: { title: 'Book' } },
    { path: '/playground', name: 'playground', component: PlaygroundView, meta: { title: 'Playground' } },
  ],
});

export default router;
