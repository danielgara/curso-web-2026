<script setup lang="ts">
// 1. Define a variable and use it in the template
const name = 'Daniel';

// 2. Define a reactive variable with a function
import { ref } from 'vue';
const count = ref(0);
function increment() {
  count.value += 1;
}

// 3. Watch a reactive variable and modify DOM
import { watch } from 'vue';
let message = ref('');
watch(count, (newCount) => {
  if (newCount % 2 === 0) {
    message.value = 'El conteo es par';
  } else {
    message.value = 'El conteo es impar';
  }
});
</script>

<template>
  <section class="max-w-7xl mx-auto p-6">
    <!-- start of 1 -->
    <h1 class="text-2xl font-bold text-gray-800 mb-6">{{ name }}</h1>
    <!-- end of 1 -->

    <!-- start of 2 -->
    <div class="bg-white rounded-lg shadow-md p-8 text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Counter</h2>
      <div class="mb-6">
        <p class="text-4xl font-bold text-blue-600 mb-4">{{ count }}</p>
      </div>
      <button
        @click="increment"
        class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 font-semibold"
      >
        Click me
      </button>
    </div>
    <!-- end of 2 -->

    <!-- start of 3 -->
    <div class="bg-white rounded-lg shadow-md p-8 text-center">
      <p class="text-2xl font-bold text-gray-800 mb-6">{{ message }}</p>
    </div>
    <!-- end of 3 -->

    <!-- start of 4 conditional rendering-->
    <div class="bg-white rounded-lg shadow-md p-8 text-center">
      <p v-if="count === 0" class="text-2xl font-bold text-gray-800 mb-6">Conteo es 0</p>
      <p v-else-if="count <= 5" class="text-2xl font-bold text-gray-800 mb-6">Conteo es Bajo</p>
      <p v-else-if="count <= 10" class="text-2xl font-bold text-gray-800 mb-6">Conteo es Medio</p>
      <p v-else-if="count <= 15" class="text-2xl font-bold text-gray-800 mb-6">Conteo es Alto</p>
      <p v-else class="text-2xl font-bold text-gray-800 mb-6">Conteo es Muy Alto</p>
    </div>
    <!-- end of 4 conditional rendering-->
  </section>
</template>
