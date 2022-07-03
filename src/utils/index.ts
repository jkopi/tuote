import forage from '../config/localForage';
import { Product } from '../interfaces';

// returns the original price of an item
export function originalPrice(price: number, discountPercentage: number): number {
  const discountedProductPrice = (price / 100) * discountPercentage;
  const originalProductPrice = Math.floor(price + discountedProductPrice);

  return originalProductPrice;
}

// returns the total price of items in cart
export function calculateTotalCartPrice(cartItems: Product[]): number {
  return cartItems.reduce((pre: number, cur: Product) => {
    const { price, discountPercentage } = cur;

    return pre + originalPrice(price, discountPercentage);
  }, 0);
}

/**
 * Shamelessly copied from https://stackoverflow.com/a/8809472
 * @returns uuid string
 */
export const generateUUID = () => {
  let d = new Date().getTime(),
    d2 = (performance && performance.now && performance.now() * 1000) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c == 'x' ? r : (r & 0x7) | 0x8).toString(16);
  });
};

export const getCartItemsFromLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem('product-app/cart') ?? "");
  if (items) {
    return items as Product[];
  }
  return [];
};
