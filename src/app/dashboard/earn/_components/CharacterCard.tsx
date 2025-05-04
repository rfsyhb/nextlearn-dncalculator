'use client';
import { PackagePlus, Trash, UserRound } from 'lucide-react';
import CharacterItemList from './CharacterItemList';
import { dummyInventory, dummyItemMetas } from '@/lib/dummyData';

interface CharacterProps {
  name: string;
}

export default function CharacterCard({ name }: CharacterProps) {
  return (
    <div className='relative rounded-md bg-gray-700 p-2 min-w-70 max-w-70 flex flex-col gap-2'>
      <div className='flex justify-between items-center gap-2'>
        <div className='flex flex-row justify-center items-center'>
          <UserRound className='w-10 h-10' />
          <span className='font-medium'>{name}</span>
        </div>
        <div className='flex flex-row gap-4 bg-slate-600 rounded-md p-2'>
          <button
            className='group relative cursor-pointer'
            onClick={() => alert('Add item')}
          >
            <PackagePlus className='text-green-300' />
            <span className='absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-gray-700 px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition'>
              Add Item
            </span>
          </button>
          <button
            className='group relative cursor-pointer'
            onClick={() => alert('Remove character')}
          >
            <Trash className='text-red-400' />
            <span className='absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white bg-gray-700 px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition'>
              Remove
            </span>
          </button>
        </div>
      </div>
      <CharacterItemList inventory={dummyInventory} itemMetas={dummyItemMetas}/>
    </div>
  );
}
