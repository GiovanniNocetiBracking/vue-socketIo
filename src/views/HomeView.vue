<script setup>
import { useCounterStore } from '@/stores/counter';
import { onMounted, onBeforeUnmount } from 'vue';

const counterStore = useCounterStore();

onMounted(() => {
  counterStore.initializeSocket();
});

onBeforeUnmount(() => {
  counterStore.cleanupSocket();
});
</script>

<template>
  <div class="h-screen w-screen flex justify-center items-center flex-col">
    <h1 class="font-bold text-2xl mb-4">hello world</h1>
    <h2>counter: {{ counterStore.count }}</h2>
    <div class="flex space-x-4">
      <button @click="counterStore.increment">increment</button>
      <button @click="counterStore.decrement">decrement</button>
    </div>
    <p>State: {{ counterStore.isConnected ? 'connected' : 'disconected' }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
