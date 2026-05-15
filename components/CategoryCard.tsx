import Link from 'next/link';

type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products?category=${category.id}`}
      className="group block rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-lg shadow-orange-100/50 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-none"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-2xl transition group-hover:bg-orange-100 dark:bg-slate-800">
        <span>{category.icon}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900 transition group-hover:text-slate-950 dark:text-white">
        {category.name}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{category.description}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition group-hover:text-orange-600 dark:text-slate-100 dark:group-hover:text-orange-300">
        <span>Browse</span>
        <span className="inline-block rounded-full bg-orange-100 px-2 py-1 text-orange-700 dark:bg-orange-200 dark:text-orange-900">→</span>
      </div>
    </Link>
  );
}
