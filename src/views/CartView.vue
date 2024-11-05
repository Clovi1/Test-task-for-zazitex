<script setup lang="ts">
import { computed, onMounted } from 'vue'
import CartItem from '@/components/CartItem.vue'
import { cartStore } from '@/stores/cartStore'

onMounted(() => {
  cartStore.loadCartItems();
});

const totalPrice = computed(() => {
  return cartStore.cartItems.reduce((total, cartItem) => {
    return total + (cartItem.product.price * cartItem.quantity);
  }, 0);
});

</script>

<template>
  <div v-if="cartStore.totalQuantity" class="flex flex-wrap gap-10">
    <div class="flex-grow">
      <CartItem
        v-for="cartItem in cartStore.cartItems"
        :key="cartItem.id"
        :product="cartItem.product"
        :quantity="cartItem.quantity"
      />
    </div>

    <div class="p-10 flex flex-col items-center border border-grey-200 rounded-3xl space-y-2 w-[250px] h-min">
      <div class="text-sm text-grey-500">Количество товаров:</div>
      <div class="text-4xl text-grey-600">{{ cartStore.totalQuantity }}</div>

      <div class="text-sm text-grey-500">Стоимость товаров:</div>
      <div class="text-4xl text-grey-600">{{ totalPrice }}</div>
      <div class="text-sm text-grey-500">леев</div>
    </div>
  </div>

  <div v-else class="text-center mt-5 text-3xl">
    Корзина Пуста
  </div>
</template>
