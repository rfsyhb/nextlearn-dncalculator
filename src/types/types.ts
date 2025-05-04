import { ITEM_KEYS } from "@/lib/itemList";

// type ItemKey = 'x' | 'y' | 'z';
export type ItemKey = (typeof ITEM_KEYS)[number];

export interface ItemMeta {
  key: ItemKey;
  name: string;
  image_url: string;
}

export interface ItemStats {
  key: ItemKey;
  quantity: number;
  price: number;
}

export type Inventory = Record<ItemKey, number>;

export interface Character {
  id: string;
  name: string;
  inventory: Inventory;
}