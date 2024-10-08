<script setup>
import { ref, computed } from 'vue';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();

const defaultDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = ref(defaultDarkTheme || themeStore.isDark);

const themeClass = computed(() => (isDark.value ? 'dark' : ''));
</script>
<template>
  <main
    :class="themeClass"
    class="flex items-center justify-center h-screen transition-all duration-300 bg-background text-primary"
  >
    <RouterView />
  </main>
</template>
