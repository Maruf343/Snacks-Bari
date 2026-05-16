'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/products' },
  { label: 'Offers', href: '/#offers' },
];

type UserState = {
  name: string;
  photoURL?: string;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [user, setUser] = useState<UserState | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [cartCount, setCartCount] = useState(0);

  const getCartCount = () => {
    if (typeof window === 'undefined') return 0;
    try {
      const stored = window.localStorage.getItem('snack-bari-cart');
      if (!stored) return 0;
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed.reduce((sum, item) => sum + (item.quantity ?? 1), 0);
      }
      if (typeof parsed === 'number') {
        return parsed;
      }
      return 0;
    } catch {
      return 0;
    }
  };

  useEffect(() => {
    const initialTheme = window.localStorage.getItem('snacks-bari-theme') === 'dark' ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    const updateCart = () => setCartCount(getCartCount());
    updateCart();
    window.addEventListener('storage', updateCart);
    window.addEventListener('snack-bari-cart-change', updateCart);
    return () => {
      window.removeEventListener('storage', updateCart);
      window.removeEventListener('snack-bari-cart-change', updateCart);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const displayName = currentUser.displayName || currentUser.email?.split('@')[0] || 'Member';
        setUser({
          name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
          photoURL: currentUser.photoURL || undefined,
        });
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
            Snacks Bari
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="hidden w-full max-w-sm items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm transition dark:border-slate-700 dark:bg-slate-900 sm:flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-3 h-4 w-4 text-slate-400 dark:text-slate-400">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search snacks"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>

          <Link href="/cart" className="relative inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100">
            {cartCount > 0 && (
              <span className="mr-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-slate-900 px-1.5 text-[0.65rem] font-bold text-white dark:bg-orange-500">
                {cartCount}
              </span>
            )}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M6 6h15l-1.5 9h-13z" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </Link>

          <button
            type="button"
            onClick={() => {
              const nextTheme = theme === 'dark' ? 'light' : 'dark';
              setTheme(nextTheme);
              document.documentElement.classList.toggle('dark', nextTheme === 'dark');
              window.localStorage.setItem('snacks-bari-theme', nextTheme);
            }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M12 18.25a6.25 6.25 0 1 0 0-12.5" />
                <path d="M12 2v2.5M12 19.5V22M4.22 4.22l1.77 1.77M17.01 17.01l1.77 1.77M2 12h2.5M19.5 12H22M4.22 19.78l1.77-1.77M17.01 6.99l1.77-1.77" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M12 3v2.5M12 18.5V21M4.22 4.22l1.77 1.77M17.01 17.01l1.77 1.77M2 12h2.5M19.5 12H22M4.22 19.78l1.77-1.77M17.01 6.99l1.77-1.77" />
                <circle cx="12" cy="12" r="5" />
              </svg>
            )}
          </button>

          {user ? (
            <div className="hidden items-center gap-3 md:flex">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
                ) : (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 text-sm font-semibold text-slate-700">
                    {user.name.charAt(0)}
                  </span>
                )}
                <span>{user.name}</span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link href="/login" className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
                Sign In
              </Link>
              <Link href="/signup" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-orange-500 dark:hover:bg-orange-400">
                Register
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 md:hidden"
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-950`}>
        <div className="space-y-2 px-4 py-4">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-slate-400 dark:text-slate-400">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search snacks"
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </div>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="space-y-2">
            {user ? (
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="block rounded-full border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
                  Sign In
                </Link>
                <Link href="/signup" className="block rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-orange-500 dark:hover:bg-orange-400">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
