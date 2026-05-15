import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { featuredSnacks, categories } from '@/lib/api';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff3e5] via-[#fff7d6] to-[#ffe6d0] text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 dark:text-slate-100">
      <Navbar />

      <section className="relative overflow-hidden px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex rounded-full bg-snackYellow/90 px-4 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-lg shadow-orange-300/60 transition dark:bg-slate-700/90 dark:text-slate-100 dark:shadow-none">
              Snack vibes only
            </div>
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Crunchy, juicy, and delightfully bold.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl dark:text-slate-300">
              Discover playful flavors from chips to sweets, all packed with quality ingredients and vibrant energy for every snack moment.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#featured" className="inline-flex items-center justify-center rounded-full bg-snack text-white px-6 py-3 text-base font-semibold shadow-glow transition hover:bg-orange-500">
                Shop featured snacks
              </a>
              <a href="#categories" className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700/50 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800">
                Explore categories
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto max-w-xl rounded-[2rem] bg-gradient-to-br from-[#fffbf2] via-[#fff1dc] to-[#ffe1c2] p-6 shadow-glow ring-1 ring-orange-200/80 sm:p-8 transition dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 dark:ring-slate-800">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-snackPink/80 blur-2xl" />
              <div className="relative grid gap-4">
                <div className="flex items-center justify-between rounded-3xl bg-white/85 p-5 shadow-sm transition dark:bg-slate-900/95">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-snackDeep dark:text-slate-300">Snack combo</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Tropical Crunch Pack</h2>
                  </div>
                  <div className="rounded-3xl bg-[#ffedd5] px-4 py-3 text-sm font-semibold text-snackDeep dark:bg-slate-800 dark:text-slate-100">
                    $24.99
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-[#fff8ef] p-5 shadow-inner shadow-orange-100/70 transition dark:bg-slate-900/95 dark:shadow-none">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-snackDeep dark:text-slate-300">Chips</p>
                    <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">Mango Zest</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-[#fff8ef] p-5 shadow-inner shadow-orange-100/70 transition dark:bg-slate-900/95 dark:shadow-none">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-snackDeep dark:text-slate-300">Drink</p>
                    <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">Sparkling Citrus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="px-6 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-snackDeep dark:text-slate-300">Featured snacks</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Our best sellers</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              Bright, flavorful snacks made for celebrations, movie nights, and everyday cravings.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featuredSnacks.map((snack) => (
              <ProductCard key={snack.id} product={snack} />
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="bg-[#fff2e4] px-6 py-16 sm:px-8 lg:px-12 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-snackDeep dark:text-slate-300">Shop by category</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Snack categories to match every mood</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
