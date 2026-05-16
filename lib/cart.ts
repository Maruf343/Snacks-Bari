'use client';

import { FeaturedSnack } from '@/lib/api';

const CART_KEY = 'snack-bari-cart';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const broadcastCartChange = () => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event('snack-bari-cart-change'));
};

export const getCartItems = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = window.localStorage.getItem(CART_KEY);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveCartItems = (items: CartItem[]) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CART_KEY, JSON.stringify(items));
    broadcastCartChange();
  } catch {
    // ignore write failures
  }
};

export const getCartCount = () => {
  return getCartItems().reduce((sum, item) => sum + item.quantity, 0);
};

export const addToCart = (product: FeaturedSnack, quantity = 1) => {
  if (typeof window === 'undefined') return;

  const existingItems = getCartItems();
  const productPrice = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;
  const updatedItems = existingItems.map((item) =>
    item.id === product.id
      ? { ...item, quantity: item.quantity + quantity }
      : item
  );

  if (!updatedItems.some((item) => item.id === product.id)) {
    updatedItems.push({
      id: product.id,
      name: product.name,
      price: productPrice,
      image: product.image,
      quantity,
    });
  }

  saveCartItems(updatedItems);
};

export const removeCartItem = (id: string) => {
  const items = getCartItems().filter((item) => item.id !== id);
  saveCartItems(items);
  return items;
};

export const updateCartItemQuantity = (id: string, delta: number) => {
  const items = getCartItems()
    .map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    )
    .filter((item) => item.quantity > 0);
  saveCartItems(items);
  return items;
};
