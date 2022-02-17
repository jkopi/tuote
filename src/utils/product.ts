export function originalPrice(price: number, discountPercentage: number): number {
  const discountedProductPrice = (price / 100) * discountPercentage;
  const originalProductPrice = Math.floor(price + discountedProductPrice);

  return originalProductPrice;
}