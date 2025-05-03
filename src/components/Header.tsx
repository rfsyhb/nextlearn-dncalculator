'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();
  const isHome = pathName === '/';
  const isDashboard = pathName.startsWith('/dashboard');

  return (
    <header className='flex justify-between items-center bg-foreground text-background'>
      <h1 className='text-xl font-semibold'>DNCalc</h1>
      <nav className='flex gap-4'>
        <Link
          href='/'
          className={`rounded-md ${
            isHome ? 'bg-blue-600 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Home
        </Link>
        <Link
          href='/dashboard'
          className={`rounded-md ${
            isDashboard ? 'bg-blue-600 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
