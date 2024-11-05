<script setup lang="ts">
import { ref } from 'vue'
import type { AddProductModalProps } from '@/types/types'
import { cartStore } from '@/stores/cartStore'

const { product, openModal, closeModal } = defineProps<AddProductModalProps>();
const quantity = ref(1);


const closeModalWithReset = () => {
  quantity.value = 1
  closeModal()
}

const increment = () => {
  if(product && quantity.value < product.stock){
    quantity.value++;
  }
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  if (product) {
    cartStore.addToCart({product, quantity: quantity.value})
  }
  closeModalWithReset();
};
</script>

<template>
  <div v-if="openModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click="closeModalWithReset">
    <div class="bg-white rounded-2xl p-6 w-80 text-center shadow-lg" @click.stop>
      <h3 class="text-lg font-semibold mb-4">Добавить в корзину</h3>
      <img :src="product?.image" alt="Product image" class="object-cover rounded-xl w-14 h-14 mx-auto">
      <h3 class="text-lg font-semibold mb-4">{{ product?.title }}</h3>
      <p class="text-sm mb-4">Выберите количество для добавления в корзину:</p>
      <div class="flex items-center mb-4 h-10">
        <button @click="decrement" class="bg-white border border-grey-200 text-grey-500 p-2 rounded-l-lg hover:bg-grey-100">-</button>
        <input
          type="number"
          v-model.number="quantity"
          min="1"
          :max="product?.stock"
          class="w-full border  border-gray-300 p-2 text-center focus:outline-none"
        />
        <button @click="increment" class="bg-white border border-grey-200 text-grey-500 p-2 rounded-r-lg   hover:bg-grey-100">+</button>
      </div>
      <div class="flex justify-between gap-4">
        <button
          @click="closeModalWithReset"
          class="flex-1 bg-white border border-grey-200 text-grey-500 py-2 px-4 rounded-full hover:bg-grey-100"
        >
          Отмена
        </button>
        <button
          @click="addToCart"
          class="flex-1 bg-grey-700 text-white py-2 px-4 rounded-full hover:bg-grey-600"
        >
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>
