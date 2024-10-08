import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false);

  function setTheme() {
    isDark.value = !isDark.value;
  }
  return {
    isDark,
    setTheme,
  };
});
