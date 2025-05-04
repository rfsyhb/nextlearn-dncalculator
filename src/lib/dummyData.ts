import type { Inventory, ItemMeta } from "@/types/types";

export const dummyInventory: Inventory = {
  rawGold: 100,
  ordinaryAgate: 12,
  ordinaryAlteum: 8,
  ordinaryDiamond: 3,
  dimensionalBoxKey: 2,
  midGradeAgateCode: 0,
  midGradeCrystalCode: 5,
  midGradeDiamondCode: 1,
};

export const dummyItemMetas: ItemMeta[] = [
  {
    key: "rawGold",
    name: "Raw Gold",
    image_url: "/rawGold.png",
  },
  {
    key: "ordinaryAgate",
    name: "Ordinary Agate",
    image_url: "/ordinaryAgate.png",
  },
  {
    key: "ordinaryAlteum",
    name: "Ordinary Alteum",
    image_url: "/ordinaryAlteum.png",
  },
  {
    key: "ordinaryDiamond",
    name: "Ordinary Diamond",
    image_url: "/ordinaryDiamond.png",
  },
  {
    key: "dimensionalBoxKey",
    name: "Dimensional Box Key",
    image_url: "/dimensionalBoxKey.png",
  },
  {
    key: "midGradeAgateCode",
    name: "Mid Grade Agate Code",
    image_url: "/midGradeAgateCode.png",
  },
  {
    key: "midGradeCrystalCode",
    name: "Mid Grade Crystal Code",
    image_url: "/midGradeCrystalCode.png",
  },
  {
    key: "midGradeDiamondCode",
    name: "Mid Grade Diamond Code",
    image_url: "/midGradeDiamondCode.png",
  },
];