'use client';

import { useInventoryStore } from '@/stores/useInventoryStore';
import { X } from 'lucide-react';
import Image from 'next/image';
import { ItemKey } from '@/types/types';
import { itemMetas } from '@/lib/itemMeta';

interface CharacterInventoryProps {
  currentCharacter: string | null;
  closeInventory: () => void;
}

export default function CharacterInventory({
  currentCharacter,
  closeInventory,
}: CharacterInventoryProps) {
  const setItemCount = useInventoryStore((s) => s.setItemCount);
  const inventories = useInventoryStore((s) => s.inventories);

  const setStartTime = useInventoryStore((s) => s.setStartTime);
  const setEndTime = useInventoryStore((s) => s.setEndTime);
  const removeStartTime = useInventoryStore((s) => s.removeStartTime);
  const removeEndTime = useInventoryStore((s) => s.removeEndTime);
  const times = useInventoryStore((s) => s.times);

  if (!currentCharacter) return null;

  const currentInventory = inventories[currentCharacter] ?? {};
  const currentTime = times?.[currentCharacter];

  const formatTime = (timestamp: number | null) => {
    if (!timestamp) return 'belum set';
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <div className='flex flex-col gap-2 bg-gray-500 rounded-2xl p-4 min-h-fit'>
      <div className='flex flex-row justify-between items-center'>
        <h2 className='text-xl'>{currentCharacter}&apos;s Inventory</h2>
        <button className='cursor-pointer' onClick={closeInventory}>
          <X />
        </button>
      </div>

      <div className='grid grid-cols-2 gap-1 min-w-fit'>
        {itemMetas.map((item) => {
          const count = currentInventory[item.key as ItemKey] ?? 0;

          return (
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
                  type='number'
                  className='bg-black/20 text-sm w-full rounded-sm p-1 border-none focus:outline-none'
                  value={count}
                  min={0}
                  onChange={(e) =>
                    setItemCount(
                      currentCharacter,
                      item.key as ItemKey,
                      Number(e.target.value),
                    )
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className='text-sm flex flex-col gap-1'>
        <div className='flex flex-row justify-between items-center gap-2'>
          <span className='text-lg'>{formatTime(currentTime?.startTime ?? null)}</span>
          <div className='flex gap-1'>
            <button
              onClick={() => setStartTime(currentCharacter)}
              disabled={!!currentTime?.startTime}
              className={`px-3 py-1 rounded text-white ${
                currentTime?.startTime
                  ? 'hidden'
                  : 'bg-green-800 hover:bg-green-700'
              }`}
            >
              add start time
            </button>
            <button
              onClick={() => removeStartTime(currentCharacter)}
              disabled={!currentTime?.startTime}
              className={`px-3 py-1 rounded text-white ${
                !currentTime?.startTime
                  ? 'hidden'
                  : 'bg-red-800 hover:bg-red-700'
              }`}
            >
              cancel
            </button>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center gap-2'>
          <span className='text-lg'>{formatTime(currentTime?.endTime ?? null)}</span>
          <div className='flex gap-1'>
            <button
              onClick={() => setEndTime(currentCharacter)}
              disabled={!currentTime?.startTime}
              className={`px-3 py-1 rounded text-white ${
                currentTime?.endTime
                  ? 'hidden'
                  : 'bg-blue-800 hover:bg-blue-700'
              }`}
            >
              {!currentTime?.startTime ? 'add start time first!' : 'add finish time'}
            </button>
            <button
              onClick={() => removeEndTime(currentCharacter)}
              disabled={!currentTime?.endTime}
              className={`px-3 py-1 rounded text-white ${
                !currentTime?.endTime
                  ? 'hidden'
                  : 'bg-red-800 hover:bg-red-700'
              }`}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
