export default function UtilityLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className='h-full flex flex-col justify-center items-center gap-4'>
      {children}
    </section>
  );
}
