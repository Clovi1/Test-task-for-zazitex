<script setup lang="ts">
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="bg-grey-700 text-white py-4 mt-8">
    <div class="container mx-auto text-center">
      <p class="text-sm">
        &copy; {{ currentYear }} Тестовый проект, сделан Максимом Курудимовым. Все права защищены.
      </p>
    </div>
  </footer>
</template>

