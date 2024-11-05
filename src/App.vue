<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader/>
    <div class="container flex-grow py-4">
      <RouterView />
    </div>
    <AppFooter />
  </div>
</template>

