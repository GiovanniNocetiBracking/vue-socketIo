import { ref } from 'vue';
import { defineStore } from 'pinia';
import ikcountService from '@/services/ikcountService';
import { socket } from '../utils/ikcountWS';

export const useCounterStore = defineStore('counter', () => {
  /* ---------------STATE-------------- */
  const count = ref(0);
  const isConnected = ref(false);

  /* ---------------ACTIONS-------------- */
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
    socket.on('connect', () => {
      console.log('Conectado al socket');
    });
    socket.on('welcome', handleWelcome);
    socket.on('raw', handleRaw);
    socket.on('heartbeat', handleHeartbeat);
    socket.on('connect_error', (error) => {
      console.log('socket error: ' + error);
    });
  }

  function cleanupSocket() {
    // Limpia los eventos al destruir el componente
    socket.off('connect', () => {
      console.log('Desconectado del socket');
    });
    socket.off('welcome', handleWelcome);
    socket.off('raw', handleRaw);
    socket.off('heartbeat', handleHeartbeat);
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
