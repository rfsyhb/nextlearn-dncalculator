'use client';
import { usePriceStore } from '@/stores/usePriceStore';
import { ItemKey } from '@/types/types';
import Image from 'next/image';

interface ItemCardProps {
  itemName: string;
  itemKey: ItemKey;
  image_url: string;
}

export default function ItemCard({
  itemName,
  itemKey,
  image_url,
}: ItemCardProps) {
  const setPrice = usePriceStore((s) => s.setPrice);

  const prices = usePriceStore((s) => s.prices);

  return (
    <div className='bg-gray-700 w-32 p-2 rounded-md'>
      <div className='flex flex-row '>
        <Image
          src={image_url}
          alt={itemKey}
          width={40}
          height={40}
          className='rounded-md object-contain'
        />
        <input
          type='number'
          className='bg-slate-600 w-full rounded-sm p-1 border-none focus:outline-none'
          placeholder='Price'
          onChange={(e) => setPrice(itemKey, Number(e.target.value))}
          min={0}
          max={100}
          step={0.1}
          value={prices[itemKey] ?? 0}
        />
      </div>
      <span className='truncate block'>
        {itemName}
      </span>
    </div>
  );
}
