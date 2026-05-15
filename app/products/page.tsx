import Navbar from '@/components/Navbar';
import CategorySidebar from '@/components/CategorySidebar';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff3e5] via-[#fff7d6] to-[#ffe6d0] text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 dark:text-slate-100">
      <Navbar />

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[250px_1fr]">
          <CategorySidebar />

          <div className="rounded-[2rem] bg-white/90 p-10 shadow-xl shadow-orange-100/70 transition dark:bg-slate-900/95 dark:shadow-none">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Products</h1>
            <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">Browse all our snack favorites in one place. Freshly curated for every craving.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
