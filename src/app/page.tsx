'use client';
import CharacterCard from '@/components/CharacterCard';
import { itemMetas } from '@/lib/itemMeta';
import { useCharacterStore } from '@/stores/useCharacterStore';
import { useInventoryStore } from '@/stores/useInventoryStore';
import { usePriceStore } from '@/stores/usePriceStore';
import { ItemKey } from '@/types/types';
import Image from 'next/image';
import { useMemo } from 'react';

export default function Home() {
  const characters = useCharacterStore((s) => s.characters);
  const inventories = useInventoryStore((s) => s.inventories);
  const prices = usePriceStore((s) => s.prices);

  // Hitung total tiap itemKey menggunakan Object.values(...)
  const totals = useMemo(() => {
    // mulai dari 0 untuk semua key
    const acc = itemMetas.reduce(
      (map, item) => ({ ...map, [item.key]: 0 }),
      {} as Record<ItemKey, number>,
    );
    // tambahkan setiap inventory karakter
    Object.values(inventories).forEach((inv) => {
      itemMetas.forEach((item) => {
        acc[item.key] += inv[item.key] ?? 0;
      });
    });

    return acc;
  }, [inventories]);

  // Menghitung grand total (sum of count * price)
  const grandTotal = useMemo(() => {
    return itemMetas.reduce((sum, item) => {
      const count = totals[item.key] ?? 0;
      const price = prices[item.key] ?? 0;
      return sum + count * price;
    }, 0);
  }, [totals, prices]);

  const tax = +(grandTotal * 0.1).toFixed(2);
  const afterTax = +(grandTotal - tax).toFixed(2);

  return (
    <main className='justify-center items-center h-full flex flex-col gap-4 p-4 overflow-auto'>
      <div className='flex overflow-auto flex-wrap flex-row gap-1 justify-center'>
        {characters.length > 0 &&
          characters.map((name) => {
            return <CharacterCard key={name} name={name} />;
          })}
      </div>
      <div className='flex flex-row gap-4'>
        <div>
          <h2 className='text-xl mb-2'>Total Pendapatan 😋😋</h2>
          <div className='flex flex-col gap-1'>
            {itemMetas.map((item) => {
              const count = totals[item.key] ?? 0;
              const price = prices[item.key];
              const subtotal =
                price != null ? +(count * price).toFixed(2) : NaN;
              return (
                <div key={item.key} className='flex items-center gap-2'>
                  {/* icon */}
                  <Image
                    src={item.image_url}
                    alt={item.key}
                    width={30}
                    height={30}
                    className='rounded-md object-contain'
                  />
                  <div className='flex flex-1 items-center'>
                    {item.name == 'Raw Gold' ? (
                      <span className='w-14 text-right font-mono'>
                        {count.toFixed(1)}
                      </span>
                    ) : (
                      <span className='w-14 text-right font-mono'>{count}</span>
                    )}

                    <span className='mx-2 font-mono'>
                      x {price != null ? price.toFixed(2) : 'n/a'}
                    </span>
                    {/*ujung kanan */}
                    <span className='ml-auto text-right font-mono'>
                      ={' '}
                      {Number.isFinite(subtotal) ? subtotal.toFixed(2) : 'n/a'}{' '}
                      gold
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='justify-center flex flex-col'>
          <div className='p-4 text-right flex flex-col font-mono border'>
            <span>pajak th dawg: {tax.toFixed(2)} gold</span>
            <span className='font-sans font-semibold text-lg'>
              Grand Total: {afterTax.toLocaleString()} gold
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
