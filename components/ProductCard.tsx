type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  tag: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-xl shadow-orange-100/50 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="overflow-hidden rounded-[1.75rem] bg-[#fff3e5]">
        <img src={product.image} alt={product.name} className="h-64 w-full object-cover" />
      </div>
      <div className="mt-5">
        <span className="inline-flex rounded-full bg-snackYellow/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-900">
          {product.tag}
        </span>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-3 text-lg font-bold text-snackDeep">{product.price}</p>
        <button className="mt-6 w-full rounded-full bg-snack px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500">
          Add to cart
        </button>
      </div>
    </article>
  );
}
