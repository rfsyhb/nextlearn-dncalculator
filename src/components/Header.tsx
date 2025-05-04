'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();
  const isHome = pathName === '/';
  const isDashboard = pathName.startsWith('/dashboard');
  const isItem = pathName.startsWith('/item');

  return (
    <header className='flex gap-2 items-center justify-center bg-foreground text-background p-2'>
      <div className='absolute left-2'>
        <h1 className='text-xl font-semibold'>
          DNCalc <span className='text-sm font-normal'>by limau</span>
        </h1>
      </div>
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
        <Link
          href='/item'
          className={`rounded-md ${
            isItem ? 'bg-blue-600 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Item Prices
        </Link>
      </nav>
    </header>
  );
}
