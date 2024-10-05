<script setup>
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center flex-col">
    <h1 class="font-bold text-2xl mb-4">hello world</h1>
    <h2>counter: {{ counterStore.count }}</h2>
    <div class="flex space-x-4">
      <button @click="counterStore.increment">increment</button>
      <button @click="counterStore.decrement">decrement</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
