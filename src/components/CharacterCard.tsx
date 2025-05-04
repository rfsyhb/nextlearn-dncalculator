'use client';
import { itemMetas } from '@/lib/itemMeta';
import { useInventoryStore } from '@/stores/useInventoryStore';
import { UserRound } from 'lucide-react';
import Image from 'next/image';

interface CharacterProps {
  name: string;
}

export default function CharacterCard({ name }: CharacterProps) {
  const inventories = useInventoryStore((s) => s.inventories);

  // Ambil hanya item yang qty-nya > 0
  const nonZeroItems = itemMetas.filter(
    (item) => (inventories[name]?.[item.key] ?? 0) > 0,
  );

  return (
    <div className='rounded-md bg-gray-700 p-2 min-w-60 max-w-60 flex flex-col gap-2 min-h-22 max-h-fit'>
      <div className='flex flex-row items-center'>
        <UserRound className='w-10 h-10' />
        <span className='font-medium'>{name}</span>
      </div>
      <div className='flex flex-row overflow-x-auto gap-4'>
        {nonZeroItems.length > 0 ? (
          nonZeroItems.map((item) => (
            <div key={item.key} className='flex flex-row items-center gap-1'>
              <Image
                src={item.image_url}
                alt={item.key}
                width={20}
                height={20}
                className='rounded-md object-contain'
              />
              <span>{inventories[name]![item.key]}</span>
            </div>
          ))
        ) : (
          <span className='text-sm text-gray-400'>No items</span>
        )}
      </div>
    </div>
  );
}
