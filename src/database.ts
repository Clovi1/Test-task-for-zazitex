import Dexie, { type Table } from 'dexie'
import type { CartItem, Product } from '@/types/types'

class StoreDB extends Dexie {
  products!: Table<Product>;
  cart!: Table<CartItem>;

  constructor() {
    super('StoreDB');
    this.version(1).stores({
      products: '++id, title, price, rating, manufacturer, stock, image',
      cart: '++id, productId, quantity'
    });
  }
}

export const db = new StoreDB();

const initialProducts: Product[] = [
  {
    title: 'MacBook',
    price: 2300,
    rating: 4.5,
    manufacturer: 'Apple',
    stock: 100,
    image: 'https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'IPhone 16',
    price: 1300,
    rating: 4.8,
    manufacturer: 'Apple',
    stock: 80,
    image: 'https://plus.unsplash.com/premium_photo-1681233750830-dfbb25c7abc0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Samsung galaxy s21 plus',
    price: 1200,
    rating: 4.3,
    manufacturer: 'Samsung',
    stock: 150,
    image: 'https://images.unsplash.com/photo-1691452194257-57e0f170c32e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Apple display',
    price: 1900,
    rating: 4.3,
    manufacturer: 'Apple',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Apple watch',
    price: 700,
    rating: 4.4,
    manufacturer: 'Apple',
    stock: 55,
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Samsung watch',
    price: 500,
    rating: 4.3,
    manufacturer: 'Samsung',
    stock: 33,
    image: 'https://images.unsplash.com/photo-1680113727062-8a118574b782?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },

];

export async function initializeDatabase(): Promise<void> {
  const count = await db.products.count();
  if (count === 0) {
    await db.products.bulkPut(initialProducts);
    console.log('Изначальные данные успешно добавлены в базу данных.');
  } else {
    console.log('Данные уже существуют.');
  }
}
