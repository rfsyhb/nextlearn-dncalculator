import CharacterCard from './_components/CharacterCard';

export default function EarnPage() {
  return (
    <main className='font-poppins'>
      <p className='font-sans'>Earn page (tba)</p>
      <div className='flex flex-row'>
        <section className='flex-2/3 flex flex-wrap flex-row gap-4'>
          <CharacterCard name='Test Character' />
        </section>
        <section className='flex-1/3'></section>
      </div>
    </main>
  );
}
