<script setup lang="ts">
import type { ProductCardProps } from '@/types/types'

const { product, onAddToCart } = defineProps<ProductCardProps>();
</script>

<template>
  <div class="w-[282px] rounded-2xl hover:shadow-md hover:-translate-y-2 transition-all">
    <div class="border border-grey-100 h-[282px] flex items-center rounded-2xl">
      <img :src="product.image" alt="Product image" width="282" height="282" class="object-cover w-full h-full rounded-2xl">
    </div>
    <div class="p-2">
      <h1 class="line-clamp-3 text-grey-700">{{ product.title }}</h1>
      <div class="text-sm text-grey-500">{{ product.manufacturer }}</div>

      <div class="">
        <span class="text-xl font-medium text-grey-700 mr-1">{{ product.price }}</span>
        <span class="text-xs text-grey-500">леев</span>
      </div>

      <div class="flex justify-between mb-2">
        <div class="text-sm text-grey-500">Оценка: {{ product.rating }}</div>
        <div class="text-sm text-grey-500">В Наличии: {{ product.stock }}</div>
      </div>

      <button @click="onAddToCart(product)" class="bg-grey-700 text-white py-2 px-4 rounded-full hover:bg-grey-600">Добавить в корзину</button>
    </div>
  </div>
</template>

