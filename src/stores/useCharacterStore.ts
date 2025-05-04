import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CharacterState {
  characters: string[];
  addCharacter: (name: string) => void;
  removeCharacter: (name: string) => void;
  clearCharacters: () => void;
}

export const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      characters: [],
      addCharacter: (name) =>
        set((state) => ({ characters: [...state.characters, name] })),
      removeCharacter: (name) =>
        set((state) => ({
          characters: [...state.characters.filter((c) => c !== name)],
        })),
        clearCharacters: () =>
          set({ characters: [] }),      // ← reset ke array kosong
    }),
    { name: 'dncalc-characters' },
  ),
);
