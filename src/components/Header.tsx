'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();
  const isHome = pathName === '/';
  const isDashboard = pathName.startsWith('/dashboard');
  const isItem = pathName.startsWith('/item');
  const isUtility = pathName.startsWith('/utility');

  return (
    <header className='flex gap-2 items-center justify-center bg-foreground text-background p-2'>
      <div className='absolute left-2'>
        <h1 className='text-xl font-semibold'>
          DNCalc <Link target='_blank' href="https://github.com/rfsyhb/" className='text-sm font-normal text-blue-700 hover:font-semibold'>by limau</Link>
        </h1>
      </div>
      <nav className='flex gap-4'>
        <Link
          href='/'
          className={`rounded-md px-2 ${
            isHome ? 'bg-slate-700 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Home
        </Link>
        <Link
          href='/dashboard'
          className={`rounded-md px-2 ${
            isDashboard ? 'bg-slate-700 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Dashboard
        </Link>
        <Link
          href='/item'
          className={`rounded-md px-2 ${
            isItem ? 'bg-slate-700 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Item Prices
        </Link>
        <Link
          href='/utility'
          className={`rounded-md px-2 ${
            isUtility ? 'bg-slate-700 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Cash to Gold Converter
        </Link>
      </nav>
    </header>
  );
}
