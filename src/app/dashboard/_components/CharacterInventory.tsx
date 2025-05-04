import { dummyItemMetas } from '@/lib/dummyData';
import Image from 'next/image';

export default function CharacterInventory() {
  return (
    <div className='flex flex-col gap-2 bg-gray-500 rounded-2xl p-4 min-h-fit'>
      <h2 className='text-xl'>X&apos;s Inventory</h2>
      <div className='grid grid-cols-4 gap-1 min-w-fit'>
        {dummyItemMetas.map((item) => (
          <div
            key={item.key}
            className='flex flex-row justify-between min-w-fit items-center bg-black/20 rounded p-1 gap-1'
          >
            <div className='flex flex-row items-center gap-2'>
              <Image
                src={item.image_url}
                alt={item.key}
                width={25}
                height={25}
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
