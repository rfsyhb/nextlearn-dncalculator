import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PriceState {
  prices: Record<string, number>;
  setPrice: (itemKey: string, price: number) => void;
  clearPrices: () => void;
}

export const usePriceStore = create<PriceState>()(
  persist(
    (set) => ({
      prices: {},
      setPrice: (itemKey, price) =>
        set((s) => ({ prices: { ...s.prices, [itemKey]: price } })),
      clearPrices: () => set({ prices: {} })
    }),
    { name: 'dncalc-prices' },
  ),
);
