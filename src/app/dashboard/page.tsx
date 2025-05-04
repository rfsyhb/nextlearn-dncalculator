'use client';
import { Plus } from 'lucide-react';
import CharacterCard from './_components/CharacterCard';
import CharacterInventory from './_components/CharacterInventory';
import { useCharacterStore } from '@/stores/useCharacterStore';
import { useState } from 'react';

export default function Dashboard() {
  // global state
  const characters = useCharacterStore((s) => s.characters);
  const addCharacter = useCharacterStore((s) => s.addCharacter);
  const removeCharacter = useCharacterStore((s) => s.removeCharacter);

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
    <main className='font-poppins flex flex-row'>
      <section className='flex-2/3 flex flex-wrap flex-row gap-3 h-fit'>
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
              className='border-1 flex-1'
              value={newChar}
              onChange={(e) => setNewChar(e.target.value)}
              placeholder='Character Name'
            />
            <button className='bg-blue-300' onClick={onAddCharacter}>
              <Plus />
            </button>
          </div>
        </div>
      </section>
      <section className='flex-1/3 p-20'>
        <CharacterInventory currentCharacter={currentCharacter} closeInventory={onCloseInventory} />
      </section>
    </main>
  );
}
