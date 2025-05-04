import { dummyItemMetas } from '@/lib/dummyData';
import { X } from 'lucide-react';
import Image from 'next/image';

interface CharacterInventoryProps {
  currentCharacter: string | null;
  closeInventory: () => void;
}

export default function CharacterInventory({
  currentCharacter,
  closeInventory,
}: CharacterInventoryProps) {
  return (
    <div
      className={`flex flex-col gap-2 bg-gray-500 rounded-2xl p-4 ${
        currentCharacter ? 'min-h-fit' : 'hidden'
      }`}
    >
      <div className='flex flex-row justify-between items-center'>
        <h2 className='text-xl'>{currentCharacter}&apos;s Inventory</h2>
        <button className='cursor-pointer' onClick={closeInventory}>
          <X />
        </button>
      </div>
      <div className='grid grid-cols-2 gap-1 min-w-fit'>
        {dummyItemMetas.map((item) => (
          <div
            key={item.key}
            className='flex flex-row justify-between min-w-fit items-center bg-black/20 rounded p-1 gap-1'
          >
            <div className='flex flex-row items-center gap-2'>
              <Image
                src={item.image_url}
                alt={item.key}
                width={30}
                height={30}
                className='rounded-md object-contain'
              />
              <input
                type='text'
                defaultValue='0'
                className='bg-black/20 text-sm w-full rounded-sm p-1 border-none focus:outline-none'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
