'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

type UserData = {
  name: string;
  photoURL?: string;
};

export default function TopHeader() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const name = currentUser.displayName || currentUser.email?.split('@')[0] || 'Member';
        setUser({
          name: name.charAt(0).toUpperCase() + name.slice(1),
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
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className="bg-slate-100 text-[11px] text-slate-600">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <p className="truncate">Free delivery on orders over ৳500</p>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 shadow-sm">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.name} className="h-6 w-6 rounded-full object-cover" />
                ) : (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-300 text-xs font-semibold text-slate-700">
                    {user.name.charAt(0)}
                  </span>
                )}
                <span className="text-sm font-medium text-slate-700">{user.name}</span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full px-3 py-1 text-sm text-slate-600 transition hover:bg-slate-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium transition hover:text-slate-900">
                Sign In
              </Link>
              <Link href="/signup" className="text-sm font-medium text-slate-900 transition hover:text-slate-700">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
