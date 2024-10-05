import { ref } from 'vue';
import { defineStore } from 'pinia';
import ikcountService from '@/services/ikcountService';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  async function increment() {
    await ikcountService.setCount('manual-add', 1);
  }
  async function decrement() {
    await ikcountService.setCount('manual-sub', 1);
  }
  return { count, decrement, increment };
});
