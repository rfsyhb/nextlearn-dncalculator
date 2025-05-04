'use client';
import { Plus } from 'lucide-react';
import CharacterCard from './_components/CharacterCard';
import CharacterInventory from './_components/CharacterInventory';
import { useCharacterStore } from '@/stores/useCharacterStore';
import { useState } from 'react';
import { useInventoryStore } from '@/stores/useInventoryStore';
import { usePriceStore } from '@/stores/usePriceStore';

export default function Dashboard() {
  // global state
  const characters = useCharacterStore((s) => s.characters);
  const addCharacter = useCharacterStore((s) => s.addCharacter);
  const removeCharacter = useCharacterStore((s) => s.removeCharacter);
  const clearCharacters = useCharacterStore((s) => s.clearCharacters);
  const clearInventories = useInventoryStore((s) => s.clearInventories);
  const clearPrices = usePriceStore((s) => s.clearPrices);

  // local state
  const [newChar, setNewChar] = useState<string>('');
  const [currentCharacter, setCurrentCharacter] = useState<string | null>(null);

  // handlers
  const onAddCharacter = () => {
    if (newChar.trim() === '' || characters.includes(newChar)) return;
    addCharacter(newChar);
    setNewChar('');
  };

  const onRemoveCharacter = (name: string) => {
    removeCharacter(name);
  };

  const onSetCurrentCharacter = (name: string) => {
    setCurrentCharacter(name);
  }

  const onCloseInventory = () => {
    setCurrentCharacter(null);
  }

  return (
    <main className='font-poppins flex flex-row h-full justify-center items-center'>
      <section className='flex-2/3 flex flex-wrap flex-row gap-3 h-fit p-20'>
        {characters.map((name) => (
          <CharacterCard
            key={name}
            name={name}
            onRemoveCharacter={onRemoveCharacter}
            onSetCurrentCharacter={onSetCurrentCharacter}
          />
        ))}
        <div className='h-auto flex items-center'>
          <div className='rounded-md bg-gray-700 p-2 min-w-70 max-w-70 h-fit flex flex-row gap-2'>
            <input
              type='text'
              className='flex-1 p-1 rounded-md'
              value={newChar}
              onChange={(e) => setNewChar(e.target.value)}
              placeholder='Character Name'
            />
            <button className='hover:bg-gray-800 cursor-pointer p-1 rounded-xl' onClick={onAddCharacter}>
              <Plus />
            </button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          <button
            onClick={clearCharacters}
            className="px-4 py-2 bg-red-800 rounded hover:bg-red-700 text-white"
          >
            Clear All Characters
          </button>
          <button
            onClick={clearInventories}
            className="px-4 py-2 bg-red-800 rounded hover:bg-red-700 text-white"
          >
            Clear All Inventories
          </button>
          <button
            onClick={clearPrices}
            className="px-4 py-2 bg-red-800 rounded hover:bg-red-700 text-white"
          >
            Clear All Prices
          </button>
        </div>
      </section>
      <section className='flex-1/3 p-20'>
        <CharacterInventory currentCharacter={currentCharacter} closeInventory={onCloseInventory} />
      </section>
    </main>
  );
}
