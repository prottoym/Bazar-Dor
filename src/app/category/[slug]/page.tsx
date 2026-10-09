import { Suspense } from "react";
import ProductCard from "@/components/home/ProductCard";
import SortControl from "@/components/category/SortControl";
import EmptyState from "@/components/category/EmptyState";
import CardSkeleton from "@/components/category/CardSkeleton";
import { Product } from "@/Types";

async function CategoryContent({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort?: string }>;
}) {
  const { slug } = await params;
  const { sort } = await searchParams;

  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "force-cache" },
  );
  const all: Product[] = await res.json();

  let products = all.filter((p) => p.category === slug);

  if (products.length === 0) {
    return <EmptyState />;
  }

  if (sort === "asc") products = [...products].sort((a, b) => a.today - b.today);
  if (sort === "desc") products = [...products].sort((a, b) => b.today - a.today);

  const { categoryIcon, categoryNameBn } = products[0];

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h1 className="flex items-center gap-2 text-[24px] leading-8 font-bold">
          <span>{categoryIcon}</span>
          {categoryNameBn}
        </h1>
        <Suspense fallback={null}>
          <SortControl />
        </Suspense>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </>
  );
}

export default function CategoryPage(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ sort?: string }>;
}) {
  return (
    <div className="w-full max-w-[1152px] mx-auto px-4 py-6">
      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <CategoryContent
          params={props.params}
          searchParams={props.searchParams}
        />
      </Suspense>
    </div>
  );
}