import { Product } from '../interfaces';

export function originalPrice(price: number, discountPercentage: number): number {
  const discountedProductPrice = (price / 100) * discountPercentage;
  const originalProductPrice = Math.floor(price + discountedProductPrice);

  return originalProductPrice;
}

export function calculateTotalCartPrice(cartItems: Product[]): number {
  return cartItems.reduce((pre: number, cur: Product) => {
    const { price, discountPercentage } = cur;

    return pre + originalPrice(price, discountPercentage)
  }, 0)
}