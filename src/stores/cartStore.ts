import { reactive } from 'vue'
import type { CartProduct } from '@/types/types'
import { db } from '@/database'

export const cartStore = reactive({
  cartItems: [] as CartProduct[],
  totalQuantity: 0,

  async addToCart(cartItem: CartProduct) {
    const existingItem = this.cartItems.find(item => item.product.id === cartItem.product.id);
    if (existingItem) {
      existingItem.quantity += cartItem.quantity;
      await db.cart.update(existingItem.id!, { quantity: existingItem.quantity });
    } else {
      const id = await db.cart.add({ productId: cartItem.product.id!, quantity: cartItem.quantity });
      this.cartItems.push({ ...cartItem, id: id });
    }
    this.updateTotalQuantity();
  },

  async removeFromCart(productId: number) {
    await db.cart.where('productId').equals(productId).delete();
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.updateTotalQuantity();
  },

  async updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
      await db.cart.update(item.id!, { quantity });
    }
    this.updateTotalQuantity();
  },

  updateTotalQuantity() {
    this.totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  },

  async loadCartItems() {
    const cart = await db.cart.toArray();
    const products = await db.products.toArray();
    this.cartItems = cart.map(item => {
      const product = products.find(product => product.id === item.productId);
      return { id: item.id, product, quantity: item.quantity } as CartProduct;
    });
    this.updateTotalQuantity();
  }
});
