export interface Product {
  id?: number;
  title: string;
  price: number;
  rating: number;
  manufacturer: string;
  stock: number;
  image: string;
}

export interface CartItem {
  id?: number;
  productId: number;
  quantity: number;
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export interface AddProductModalProps {
  product: Product | null
  openModal: boolean;
  closeModal: ()=>void;
}

export interface CartProduct {
  id?: number
  product: Product;
  quantity: number;
}

export type CartItemProps = CartProduct

