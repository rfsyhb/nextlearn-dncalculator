import { dummyItemMetas } from "@/lib/dummyData";
import Image from "next/image";

export default function Home() {
  const dummyItem = dummyItemMetas[1];
  
  return (
    <main className="justify-center items-center h-full flex flex-row gap-4">
      <div>
        <p>Pendapatan:</p>
        <li>Ordinary agate: 12</li>
        <li>Ordinary alteum: 8</li>
        <li>Ordinary diamond: 3</li>
      </div>
      <div>
        <span>harga item</span>
        <div>
          <Image src={dummyItem.image_url} alt={dummyItem.name} width={50} height={50} />
          <span>Ordinary alteum</span>
          <input type="text" placeholder="1" />
        </div>
      </div>
    </main>
  );
}
