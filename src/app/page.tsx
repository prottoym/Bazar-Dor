import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import Image from "next/image";

import ProductSection from "@/components/home/ProductSection";
import { Product } from "@/Types";

export default async function Home() {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 3600 } },
  );
  const products: Product[] = await res.json();

  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <div>
      <Marquee />

      
      <Banner />


      <ProductSection
        title="আজ দাম বেড়েছে"
        icon="▲"
        iconClass="text-red-600"
        products={risers}
      />
      <ProductSection
        title="আজ দাম কমেছে"
        icon="▼"
        iconClass="text-green-600"
        products={fallers}
      />
      <ProductSection
        id="সব-পণ্য"
        title="সব পণ্য"
        subtitle={`মোট ${products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে`}
        products={products}
      />
    </div>
  );
}
