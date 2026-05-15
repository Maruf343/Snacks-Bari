import Navbar from '@/components/Navbar';
import AuthForm from '@/components/AuthForm';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff3e5] via-[#fff7d6] to-[#ffe6d0] text-slate-900">
      <Navbar />
      <section className="px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <AuthForm mode="signup" />
        </div>
      </section>
    </main>
  );
}
