import { Inventory, ItemMeta } from '@/types/types';
import Image from 'next/image';

interface CharacterItemListProps {
  inventory: Inventory;
  itemMetas: ItemMeta[];
}

export default function CharacterItemList({
  inventory,
  itemMetas,
}: CharacterItemListProps) {
  const itemsWithMeta = itemMetas
    .filter((meta) => inventory[meta.key] > 0)
    .map((meta) => ({
      key: meta.key,
      image_url: meta.image_url,
      quantity: inventory[meta.key],
    }));

  return (
    <div className='flex flex-row flex-wrap gap-1 min-w-fit'>
      {itemsWithMeta.map((item) => (
        <div key={item.key} className='flex flex-row min-w-fit items-center bg-black/20 rounded p-1 gap-1'>
          <Image
            src={item.image_url}
            alt={item.key}
            width={25}
            height={25}
            className='rounded-md object-contain'
          />
          <span className='text-sm'>{item.quantity}</span>
        </div>
      ))}
    </div>
  );
}
