import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ItemKey } from '@/types/types';

type Inventory = Record<ItemKey, number>;

interface InventoryState {
  inventories: Record<string, Inventory>; // chjaracter name -> inventory
  setItemCount: (character: string, itemKey: ItemKey, count: number) => void;
  clearInventories: () => void;
}

export const useInventoryStore = create<InventoryState>()(
  persist(
    (set) => ({
      inventories: {},
      setItemCount: (character, itemKey, count) =>
        set((state) => ({
          inventories: {
            ...state.inventories,
            [character]: {
              ...state.inventories[character ?? {}],
              [itemKey]: count,
            },
          },
        })),
      clearInventories: () => set({ inventories: {} })
    }),
    { name: 'dncalc-inventory' },
  ),
);
