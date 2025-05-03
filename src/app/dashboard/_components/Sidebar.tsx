'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathName = usePathname();
  const isDashboardPage = pathName === '/dashboard';
  const isEarnPage = pathName.includes('/earn');
  const isItemPage = pathName.includes('/item');

  return (
    <>
      <nav className='flex flex-col'>
        <Link
          href='/dashboard'
          className={`rounded-md ${
            isDashboardPage ? 'bg-blue-600 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Dashboard
        </Link>
        <Link
          href='/dashboard/earn'
          className={`rounded-md ${
            isEarnPage ? 'bg-blue-600 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Earn
        </Link>
        <Link
          href='/dashboard/item'
          className={`rounded-md ${
            isItemPage ? 'bg-blue-600 text-white' : 'hover:bg-gray-400'
          }`}
        >
          Item
        </Link>
      </nav>
    </>
  );
}
