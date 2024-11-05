<script setup lang="ts">
import type { CartItemProps } from '@/types/types'
import { ref, watch } from 'vue'
import { cartStore } from '@/stores/cartStore'

const { product, quantity } = defineProps<CartItemProps>();
const cartProductQuantity = ref<number>(quantity);

const removeFromCart = (productId: number) => {
  cartStore.removeFromCart(productId);
};

const increment = () => {
  if(cartProductQuantity.value < product.stock){
    cartProductQuantity.value++;
  }
};

const decrement = () => {
  if (cartProductQuantity.value > 1) {
    cartProductQuantity.value--;
  }
};

watch(cartProductQuantity,  (newQuantity) => {
  if (newQuantity !== quantity && newQuantity) {
    cartStore.updateQuantity(product.id!, newQuantity)
  }
});
</script>

<template>
  <div class="flex items-center gap-4 mb-4 w-full">
    <div class="min-w-24 max-w-24 h-24">
      <img :src="product.image" alt="Product image" class="object-cover w-full h-full rounded-xl">
    </div>

    <div class="space-y-2 w-full">
      <div class="flex justify-between">
        <h2 class="line-clamp-1 text-grey-700">{{ product.title }}</h2>
        <div class="text-sm text-grey-500">Оценка {{ product.rating }}</div>
      </div>

      <div class="text-sm text-grey-500">{{ product.manufacturer }}</div>

      <div class="flex items-center justify-between">
        <div>
          <span class="text-xl font-medium text-grey-700 mr-1">{{ product.price }}</span>
          <span class="text-xs text-grey-500">леев</span>
        </div>

        <div class="text-sm text-grey-500">В Наличии: <span class="font-medium">{{ product.stock }}</span></div>

        <div class="flex items-center h-10">
          <button @click="decrement" class="bg-white border border-grey-200 text-grey-500 p-2 rounded-l-lg hover:bg-grey-100">-</button>
          <input
            type="number"
            v-model.number="cartProductQuantity"
            min="1"
            :max="product?.stock"
            class="w-full border  border-gray-300 p-2 text-center focus:outline-none"
          />
          <button @click="increment" class="bg-white border border-grey-200 text-grey-500 p-2 rounded-r-lg   hover:bg-grey-100">+</button>
        </div>

        <button @click="removeFromCart(product.id!)" class="bg-white border border-grey-200 text-grey-500 py-2 px-4 rounded-full hover:bg-grey-100">
          Удалить из корзины
        </button>

        <div>Итого: {{ quantity * product.price }} леев</div>
      </div>
    </div>
  </div>
  <div class="w-full border-t border-grey-200 my-4"></div>
</template>
