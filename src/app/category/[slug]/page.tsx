import { Suspense } from "react";
import ProductCard from "@/components/home/ProductCard";
import SortControl from "@/components/category/SortControl";
import EmptyState from "@/components/category/EmptyState";
import CardSkeleton from "@/components/category/CardSkeleton";
import { Product } from "@/Types";

const gridClass =
  "grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4";

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

  // Empty state: invalid slug ba product nai
  if (products.length === 0) {
    return <EmptyState />;
  }

  if (sort === "asc") products = [...products].sort((a, b) => a.today - b.today);
  if (sort === "desc") products = [...products].sort((a, b) => b.today - a.today);

  const { categoryIcon, categoryNameBn } = products[0];

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h1 className="flex items-center gap-2 text-[22px] sm:text-[26px] leading-8 font-bold">
          <span>{categoryIcon}</span>
          {categoryNameBn}
        </h1>
        <Suspense fallback={<div className="skeleton h-9 w-full sm:w-64" />}>
          <SortControl />
        </Suspense>
      </div>

      <div className={`mt-4 ${gridClass}`}>
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
    <div className="w-full max-w-[1152px] mx-auto px-4 py-4 sm:py-6">
      <Suspense
        fallback={
          <>
            <div className="skeleton h-8 w-40" />
            <div className={`mt-4 ${gridClass}`}>
              {Array.from({ length: 8 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          </>
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