<script setup lang="ts">
import { cartStore } from '@/stores/cartStore'
</script>

<template>
  <header class="bg-grey-700">
    <div class="container h-12 flex items-center justify-between">
      <RouterLink to="/"><img alt="App logo" src="@/assets/logo.svg" width="32" height="32" /></RouterLink>

      <nav class="text-white space-x-2 flex items-center">
        <RouterLink to="/">На Главную</RouterLink>
        <RouterLink to="/cart">
          <div class="relative">
            <img alt="Cart" src="@/assets/Cart.svg" />
            <span v-if="cartStore.totalQuantity" class="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">
              {{ cartStore.totalQuantity }}
            </span>
          </div>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
