import { create } from "zustand";
import { persist } from "zustand/middleware";

interface InventoryState {
  // tiap character punya record item → jumlah
  inventories: Record<string, Record<string, number>>;
  setInventory: (character: string, itemKey: string, count: number) => void;
}

export const useInventoryStore = create<InventoryState>()(
  persist(
    (set) => ({
      inventories: {},
      setInventory: (character, itemKey, count) =>
        set((state) => ({
          inventories: {
            ...state.inventories,
            [character]: {
              ...(state.inventories[character] || {}),
              [itemKey]: count,
            },
          },
        })),
    }),
    { name: 'dncalc-inventories' },
  ),
);
