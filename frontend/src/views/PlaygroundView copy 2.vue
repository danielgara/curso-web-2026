<script setup lang="ts">
let name = 'Daniel';
let count = 0;

function increment() {
  count += 1;
  console.log(count);
}
</script>

<template>
  <section class="max-w-7xl mx-auto p-6">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">{{ name }}</h1>
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
  </section>
</template>