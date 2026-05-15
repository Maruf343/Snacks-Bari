'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signInWithEmail, signInWithGoogle, signUpWithEmail } from '@/lib/firebase';

type AuthFormProps = {
  mode: 'login' | 'signup';
};

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isSignup = mode === 'signup';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password || (isSignup && !confirmPassword)) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    if (isSignup && password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      if (isSignup) {
        await signUpWithEmail(email, password);
      } else {
        await signInWithEmail(email, password);
      }
      router.push('/');
    } catch (err: any) {
      setError(err?.message || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithGoogle();
      router.push('/');
    } catch (err: any) {
      setError(err?.message || 'Google sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-[2rem] bg-white/95 p-8 shadow-xl shadow-orange-100/70 sm:p-10 lg:flex-row lg:gap-10">
      <div className="space-y-6 lg:w-1/2">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-[#fff3e5] via-[#ffe6b8] to-[#ffd58a] p-8 shadow-inner shadow-orange-100/70">
          <p className="text-sm uppercase tracking-[0.28em] text-snackDeep">{isSignup ? 'Create account' : 'Welcome back'}</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{isSignup ? 'Sign up for Snacks Bari' : 'Sign in to your account'}</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            {isSignup
              ? 'Start shopping your favorite snacks with a clean account experience.'
              : 'Use your email and password to access your snack dashboard and place orders quickly.'}
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Why sign {isSignup ? 'up' : 'in'}?</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-snack" />
              Fast checkout and order tracking.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-snack" />
              Save favorites and shopping preferences.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-snack" />
              Manage your account securely.
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-snackDeep">{isSignup ? 'Sign up' : 'Login'}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">{isSignup ? 'Create your account' : 'Welcome back'}</h2>
            </div>
            <span className="rounded-full bg-snackSoft px-3 py-2 text-sm font-semibold text-slate-900">Snacks Bari</span>
          </div>

          <div className="mt-8 space-y-4">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google icon" className="h-5 w-5" />
              Continue with Google
            </button>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              or continue with email
              <span className="h-px flex-1 bg-slate-200" />
            </div>
          </div>

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-snack focus:ring-2 focus:ring-snack/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-snack focus:ring-2 focus:ring-snack/20"
                placeholder="Enter your password"
              />
            </div>

            {isSignup && (
              <div>
                <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-snack focus:ring-2 focus:ring-snack/20"
                  placeholder="Re-enter your password"
                />
              </div>
            )}

            {error ? <p className="rounded-2xl bg-red-100 px-4 py-3 text-sm text-red-700">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-snack px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Working...' : isSignup ? 'Create account' : 'Log in'}
            </button>
          </form>

          <div className="mt-6 border-t border-slate-200 pt-4 text-center text-sm text-slate-600">
            {isSignup ? (
              <>
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-snackDeep hover:text-snackDeep/90">
                  Log in
                </Link>
              </>
            ) : (
              <>
                New to Snacks Bari?{' '}
                <Link href="/signup" className="font-semibold text-snackDeep hover:text-snackDeep/90">
                  Create an account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
