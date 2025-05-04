import { itemMetas } from '@/lib/itemMeta';
import ItemCard from './_components/ItemCard';

export default function ItemPricePage() {
  const items = itemMetas;

  return (
    <main className='flex justify-center items-center h-full'>
      <div className='p-4 w-200 flex flex-wrap gap-4'>
        {items.map((item) => (
          <ItemCard
            key={item.key}
            itemName={item.name}
            itemKey={item.key}
            image_url={item.image_url}
          />
        ))}
      </div>
    </main>
  );
}
