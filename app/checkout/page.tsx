import Navbar from '@/components/Navbar';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff3e5] via-[#fff7d6] to-[#ffe6d0]">
      <Navbar />
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white/90 p-10 shadow-xl shadow-orange-100/70">
          <h1 className="text-4xl font-bold text-slate-900">Checkout</h1>
          <p className="mt-4 max-w-3xl text-slate-600">Secure checkout for your snack order. Fast, simple, and snack-ready.</p>
        </div>
      </section>
    </main>
  );
}
