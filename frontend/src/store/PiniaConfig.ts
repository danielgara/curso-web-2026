import { createPinia } from 'pinia';
import { watch } from 'vue';

export default class PiniaConfig {
  static setup() {
    const pinia = createPinia();
    const savedState = localStorage.getItem('piniaState')
    if (savedState) {
      pinia.state.value = JSON.parse(savedState)
    } else {
      pinia.state.value = {
        app: {
          books: [
            { id: 1, title: 'The Great Gatsby', category: 'Fiction', price: 12.99, stock: 3 },
            { id: 2, title: 'Clean Code', category: 'Programming', price: 45.0, stock: 5 },
            { id: 3, title: 'Sapiens', category: 'History', price: 18.5, stock: 2 },
          ]
        }
      }
    }

    watch(
      pinia.state,
      (state) => {
        localStorage.setItem('piniaState', JSON.stringify(state))
      },
      { deep: true }
    )

    return pinia;
  }
}