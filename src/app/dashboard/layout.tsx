import Sidebar from './_components/Sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex h-screen flex-row'>
      <aside className='w-44 bg-gray-600 text-white'>
        <Sidebar />
      </aside>
      <section className='flex-1 overflow-auto bg-gray-900'>{children}</section>
    </div>
  );
}
