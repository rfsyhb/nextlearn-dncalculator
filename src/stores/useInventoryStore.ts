import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ItemKey } from '@/types/types';

type Inventory = Record<ItemKey, number>;

interface TimeData {
  startTime: number | null;
  endTime: number | null;
}

interface InventoryState {
  inventories: Record<string, Inventory>; // chjaracter name -> inventory
  setItemCount: (character: string, itemKey: ItemKey, count: number) => void;
  clearInventories: () => void;
}

interface ExtendedInventoryState extends InventoryState {
  times: Record<string, TimeData>;
  setStartTime: (character: string) => void;
  setEndTime: (character: string) => void;
  removeStartTime: (character: string) => void;
  removeEndTime: (character: string) => void;
}

export const useInventoryStore = create<ExtendedInventoryState>()(
  persist(
    (set) => ({
      inventories: {},
      times: {},
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
      setStartTime: (character) =>
        set((state) => ({
          times: {
            ...state.times,
            [character]: {
              ...state.times[character],
              startTime: Date.now(),
            },
          },
        })),
      setEndTime: (character) =>
        set((state) => ({
          times: {
            ...state.times,
            [character]: {
              ...state.times[character],
              endTime: Date.now(),
            },
          },
        })),
      removeStartTime: (character: string) =>
        set((state) => ({
          times: {
            ...state.times,
            [character]: {
              ...state.times[character],
              startTime: null,
              endTime: null,
            },
          },
        })),
      removeEndTime: (character: string) =>
        set((state) => ({
          times: {
            ...state.times,
            [character]: {
              ...state.times[character],
              endTime: null,
            },
          },
        })),
      clearInventories: () => set({ inventories: {}, times: {} }),
    }),
    { name: 'dncalc-inventory' },
  ),
);
