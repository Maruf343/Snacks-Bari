'use client';

import { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const initialCart: CartItem[] = [
  {
    id: 'crunchy-mango',
    name: 'Crunchy Mango Chips',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1516685018646-5494d8c40d2f?auto=format&fit=crop&w=900&q=80',
    quantity: 2,
  },
  {
    id: 'berry-sparkle',
    name: 'Berry Sparkle Soda',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80',
    quantity: 1,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff3e5] via-[#fff7d6] to-[#ffe6d0] text-slate-900">
      <Navbar />
      <section className="px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="rounded-[2rem] bg-white/95 p-8 shadow-xl shadow-orange-100/70 sm:p-10">
            <h1 className="text-4xl font-bold tracking-tight">Shopping cart</h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Review your snacks, update quantities, and proceed to checkout with confidence.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
            <div className="space-y-6">
              {cartItems.length === 0 ? (
                <div className="rounded-[2rem] bg-white/90 p-8 text-center shadow-lg shadow-orange-100/50">
                  <h2 className="text-2xl font-semibold text-slate-900">Your cart is empty</h2>
                  <p className="mt-3 text-slate-600">Add some tasty snacks to begin your order.</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[120px_minmax(0,1fr)] sm:items-center">
                    <div className="overflow-hidden rounded-[1.5rem] bg-[#fff2dc]">
                      <img src={item.image} alt={item.name} className="h-32 w-full object-cover" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-sm uppercase tracking-[0.24em] text-snackDeep">{item.name}</p>
                          <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.name}</h3>
                          <p className="mt-1 text-lg font-bold text-snackDeep">${item.price.toFixed(2)}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-[#fff8f0] p-3">
                        <div className="flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-inner shadow-orange-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="rounded-full bg-snack text-white px-3 py-1 font-bold transition hover:bg-orange-500"
                          >
                            -
                          </button>
                          <span className="min-w-[2rem] text-center text-sm font-semibold text-slate-900">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="rounded-full bg-snack text-white px-3 py-1 font-bold transition hover:bg-orange-500"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm text-slate-600">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <aside className="rounded-[2rem] bg-white/95 p-8 shadow-xl shadow-orange-100/70">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-snackDeep">Order summary</p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">Total</h2>
                </div>

                <div className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-[#fff8f0] p-5">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Items</span>
                    <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Estimated shipping</span>
                    <span>$2.50</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xl font-semibold text-slate-900">
                  <span>Order total</span>
                  <span>${(totalPrice + 2.5).toFixed(2)}</span>
                </div>

                <button className="w-full rounded-full bg-snack px-6 py-4 text-base font-semibold text-white shadow-glow transition hover:bg-orange-500">
                  Checkout now
                </button>
                <p className="text-sm leading-6 text-slate-600">
                  Secure checkout, fast delivery, and stress-free snack shopping.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
