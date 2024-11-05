<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import { db } from '@/database'
import { onMounted, ref } from 'vue'
import AddProductModal from '@/components/AddProductModal.vue'
import type { Product } from '@/types/types'

const products = ref<Product[]>([]);
const showModal = ref(false);
const selectedProduct = ref<Product | null>(null);

onMounted(async () => {
  products.value = await db.products.toArray();
});

const openModal = (product: Product) => {
  selectedProduct.value = product;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedProduct.value = null;
};
</script>


<template>
  <div class="flex flex-wrap gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :on-add-to-cart="openModal"
    />
  </div>
  <AddProductModal :product="selectedProduct" :open-modal="showModal" :close-modal="closeModal"/>
</template>

