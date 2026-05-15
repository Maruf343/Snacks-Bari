export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Snacks Bari</p>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Online snack shop in Bangladesh</h2>
            <p className="max-w-sm leading-7 text-slate-600 dark:text-slate-400">
              Discover premium snacks, thoughtful combos, and fast delivery across Bangladesh with a polished and modern shopping experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li>
                <a href="/" className="transition hover:text-slate-900 dark:hover:text-white">Home</a>
              </li>
              <li>
                <a href="/products" className="transition hover:text-slate-900 dark:hover:text-white">Shop</a>
              </li>
              <li>
                <a href="/#offers" className="transition hover:text-slate-900 dark:hover:text-white">Offers</a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-slate-900 dark:hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Customer Support</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <li>
                <a href="/help" className="transition hover:text-slate-900 dark:hover:text-white">Help Center</a>
              </li>
              <li>
                <a href="/delivery" className="transition hover:text-slate-900 dark:hover:text-white">Delivery Information</a>
              </li>
              <li>
                <a href="/returns" className="transition hover:text-slate-900 dark:hover:text-white">Return Policy</a>
              </li>
              <li>
                <a href="/privacy" className="transition hover:text-slate-900 dark:hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Social Media</h3>
              <div className="mt-6 flex items-center gap-3">
                <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-900">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54V12h2.54V9.79c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
                  </svg>
                </a>
                <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 transition hover:border-green-500 hover:bg-green-500 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-green-500 dark:hover:text-white">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.373 0 .073 5.3.073 11.93c0 2.13.55 4.21 1.59 6.03L0 24l6.34-1.66a11.93 11.93 0 0 0 5.66 1.44h.01c6.63 0 11.93-5.3 11.93-11.93 0-1.99-.48-3.87-1.32-5.52zM12 21.5c-1.84 0-3.6-.5-5.15-1.44l-.37-.22-3.76.98.99-3.66-.24-.38A8.36 8.36 0 0 1 3.5 11.93c0-4.6 3.74-8.34 8.34-8.34 4.6 0 8.34 3.74 8.34 8.34 0 4.6-3.74 8.34-8.34 8.34z" />
                    <path d="M17.97 14.92c-.68-.34-1.49-.44-2.3-.2-.41.12-.8.34-1.2.58-.18.12-.35.16-.55.06-.6-.28-1.2-.56-1.83-.84-.31-.14-.57-.3-.75-.64-.22-.4-.42-.83-.6-1.26-.08-.22-.02-.37.19-.51.31-.22.64-.43.95-.63.2-.13.41-.26.61-.39.19-.11.34-.1.51.08.64.57 1.24 1.2 1.96 1.68.57.37 1.01.33 1.53-.14.38-.32.73-.67 1.08-1.01.16-.15.28-.16.45-.05.57.34 1.12.71 1.64 1.12.11.08.19.16.14.32-.08.25-.17.52-.32.74-.53.8-1.12 1.52-1.92 2.11z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Payment options</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-700 dark:text-slate-300">
                <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 dark:border-slate-700 dark:bg-slate-950">bKash</span>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 dark:border-slate-700 dark:bg-slate-950">Nagad</span>
                <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-2 dark:border-slate-700 dark:bg-slate-950">Visa</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/70 px-6 py-4 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:px-8 lg:px-12">
        © 2026 Snacks Bari. All rights reserved.
      </div>
    </footer>
  );
}
