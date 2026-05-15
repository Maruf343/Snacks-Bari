import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Snacks Bari',
  description: 'Bright, colorful snack shop for chips, drinks, sweets, and healthy bites.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
