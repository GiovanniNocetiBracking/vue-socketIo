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
  <div class="h-screen w-full lg:w-[50%] flex justify-center items-center flex-col">
    <div class="py-10">
      <div class="text-center">
        Estado:
        <span :class="counterStore.isConnected ? 'text-[greenyellow]' : 'text-[#ef4444]'">
          {{ counterStore.isConnected ? 'Conectado!' : 'Desconectado ' }}
        </span>
      </div>
      <div>
        <h1 class="text-5xl font-bold text-center">Contador: {{ counterStore.count }}</h1>
      </div>
    </div>
    <div class="flex w-full justify-evenly">
      <button @click="counterStore.decrement"><i class="pi pi-minus"></i></button>
      <button @click="counterStore.increment"><i class="pi pi-plus"></i></button>
    </div>
  </div>
</template>
