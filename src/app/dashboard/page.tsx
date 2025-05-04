'use client';
import { Plus } from 'lucide-react';
import CharacterCard from './_components/CharacterCard';
import CharacterInventory from './_components/CharacterInventory';

export default function Dashboard() {
  return (
    <main className='font-poppins flex flex-row'>
      <section className='flex-2/3 flex flex-wrap flex-row gap-3 h-fit'>
        <CharacterCard name='Asep' />
        <CharacterCard name='Ujang' />
        <div className='h-auto flex items-center'>
          <div className='rounded-md bg-gray-700 p-2 min-w-70 max-w-70 h-fit flex flex-row gap-2'>
            <input type='text' className='border-1 flex-1' />
            <button className='bg-blue-300'>
              <Plus />
            </button>
          </div>
        </div>
      </section>
      <section className='flex-1/3 p-20'>
        <CharacterInventory />
      </section>
    </main>
  );
}
