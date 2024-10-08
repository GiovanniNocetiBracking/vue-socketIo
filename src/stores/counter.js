import { ref } from 'vue';
import { defineStore } from 'pinia';
import ikcountService from '@/services/ikcountService';
import { socket } from '../utils/ikcountWS';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const isConnected = ref(false);

  async function increment() {
    await ikcountService.setCount('manual-add', 1);
  }
  async function decrement() {
    await ikcountService.setCount('manual-sub', 1);
  }

  const handleWelcome = (data) => {
    count.value = data.counting_in - data.counting_out;
  };

  const handleRaw = (data) => {
    count.value = data.counting_in - data.counting_out;
  };

  const handleHeartbeat = (data) => {
    count.value = data.counting_in - data.counting_out;
  };

  function initializeSocket() {
    socket.connect();
    socket.on('connect', () => {
      isConnected.value = true;
    });
    socket.on('welcome', handleWelcome);
    socket.on('raw', handleRaw);
    socket.on('heartbeat', handleHeartbeat);
    socket.on('connect_error', (error) => {
      console.log('socket error: ' + error);
    });
  }

  function cleanupSocket() {
    socket.off('connect', () => {
      isConnected.value = false;
    });
    socket.off('welcome', handleWelcome);
    socket.off('raw', handleRaw);
    socket.off('heartbeat', handleHeartbeat);
    socket.close();
  }
  return {
    count,
    isConnected,
    decrement,
    increment,
    initializeSocket,
    cleanupSocket,
  };
});
