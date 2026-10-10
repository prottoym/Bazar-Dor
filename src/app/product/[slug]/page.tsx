import { Suspense } from "react";
import { headers } from "next/headers";
import { connection } from "next/server";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { Product } from "@/Types";
import ChangeBadge from "@/components/home/ChangeBadge";
import PriceSummary from "@/components/product/Price";
import MarketList from "@/components/product/MarketList";

const unitMap: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  hali: "হালি",
};

function DetailSkeleton() {
  return (
    <>
      <div className="skeleton h-4 w-48" />
      <div className="skeleton h-40 w-full rounded-2xl" />
      <div className="skeleton h-96 w-full rounded-2xl" />
    </>
  );
}

async function ProductContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connection();
   
  const session = await auth.api.getSession({ headers: await headers() });
 if (!session) redirect("/signin?redirected=1");

  const { slug } = await params;
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "force-cache" },
  );
  const products: Product[] = await res.json();
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  const unit = unitMap[p.unit] ?? p.unit;
  const diff = p.today - p.yesterday;
  const word = diff > 0 ? "বেড়েছে" : diff < 0 ? "কমেছে" : "অপরিবর্তিত";

  return (
    <>
      
      <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-black/60">
        <Link href="/" className="hover:underline">
          হোম
        </Link>
        <span>›</span>
        <Link href={`/category/${p.category}`} className="hover:underline">
          {p.categoryNameBn}
        </Link>
        <span>›</span>
        <span className="text-black">{p.nameBn}</span>
      </nav>

      {/*  summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl border border-black/10 bg-white/70">
        <div className="flex items-center gap-4 sm:gap-5 min-w-0">
          <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-black/5 flex items-center justify-center text-[32px] sm:text-[40px]">
            {p.image}
          </div>

          <div className="min-w-0">
            <h1 className="text-[22px] sm:text-[28px] leading-8 sm:leading-9 font-bold">
              {p.nameBn}
            </h1>

            {/* Category tag and  unit */}
            <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] sm:text-[12px]">
              <span className="px-2.5 py-0.5 rounded-full bg-[#DDF0E3] text-[#0A8A3E] font-medium">
                {p.categoryNameBn}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-black/5 font-medium">
                প্রতি {unit}
              </span>
            </div>

            {/* Market summary */}
            <p className="mt-2 text-[12px] sm:text-[13px] leading-5">
              গতকালের তুলনায় আজ দাম <b>{word}</b>
              {diff !== 0 && (
                <> · {Math.abs(diff).toLocaleString("bn-BD")} টাকা</>
              )}
            </p>
          </div>
        </div>

        {/* Today price box */}
        <div className="shrink-0 w-full sm:w-[150px] p-4 rounded-xl bg-[#EAF3EC] text-center">
          <p className="text-[11px] leading-4 text-black/60">আজকের দাম</p>
          <p className="text-[28px] sm:text-[30px] leading-9 font-bold">
            {p.today.toLocaleString("bn-BD")}
          </p>
          <p className="text-[12px] leading-4 text-black/60">
            টাকা / {unit}
          </p>
          <div className="mt-1">
            <ChangeBadge change={p.change} />
          </div>
        </div>
      </div>

      {/*  market list */}
      <div className="p-4 sm:p-6 rounded-2xl border border-black/10 bg-white/70 space-y-6">
        <div className="space-y-3">
          <h2 className="text-[16px] sm:text-[18px] leading-7 font-bold">
            দামের সারসংক্ষেপ
          </h2>
          <PriceSummary markets={p.markets} unit={p.unit} />
        </div>

        <div className="space-y-3">
          <h2 className="text-[16px] sm:text-[18px] leading-7 font-bold">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <MarketList markets={p.markets} />
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { cache: "force-cache" },
  );
  const products: Product[] = await res.json();
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="w-full max-w-[1152px] mx-auto px-4 py-4 sm:py-6 space-y-4">
      <Suspense fallback={<DetailSkeleton />}>
        <ProductContent params={props.params} />
      </Suspense>
    </div>
  );
}