import { itemMetas } from '@/lib/itemMeta';
import ItemCard from './_components/ItemCard';

export default function ItemPricePage() {
  const items = itemMetas;

  return (
    <main className='flex flex-col justify-center items-center h-full'>
      <h2 className='text-xl font-semibold'>Daftar harga item di Trading House</h2>
      <div className='p-4 w-200 flex flex-wrap gap-4 justify-center'>
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
