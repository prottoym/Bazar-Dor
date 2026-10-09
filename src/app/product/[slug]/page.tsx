import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
// import { auth } from "@/lib/auth";
import { Product } from "@/Types";
import ChangeBadge from "@/components/home/ChangeBadge";
import PriceSummary from "@/components/product/Price";
import MarketList from "@/components/product/MarketList";

const unitMap: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
//   // Protected: login na thakle /signin
//   const session = await auth.api.getSession({ headers: await headers() });
//   if (!session) redirect("/signin");

  const { slug } = await params;
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 3600 } },
  );
  const products: Product[] = await res.json();
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  const unit = unitMap[p.unit] ?? p.unit;
  const diff = p.today - p.yesterday;
  const word = diff > 0 ? "বেড়েছে" : diff < 0 ? "কমেছে" : "অপরিবর্তিত";

  return (
    <div className="w-full max-w-[1152px] mx-auto px-4 py-6 space-y-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[12px] text-black/60">
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

      {/* summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-black/10 bg-white/70">
        <div className="flex items-center gap-5 min-w-0">
          <div className="shrink-0 w-20 h-20 rounded-2xl bg-black/5 flex items-center justify-center text-[40px]">
            {p.image}
          </div>

          <div className="min-w-0">
            <h1 className="text-[28px] leading-9 font-bold">{p.nameBn}</h1>
            <p className="text-[12px] leading-5 text-black/60">
              প্রতি {unit} · {p.categoryNameBn}
            </p>
            <p className="mt-1 text-[13px] leading-5">
              গতকালের তুলনায় আজ দাম <b>{word}</b>
              {diff !== 0 && (
                <> · {Math.abs(diff).toLocaleString("bn-BD")} টাকা</>
              )}
            </p>
          </div>
        </div>

        {/* Today price */}
        <div className="shrink-0 w-full sm:w-[150px] p-4 rounded-xl bg-[#EAF3EC] text-center">
          <p className="text-[11px] leading-4 text-black/60">আজকের দাম</p>
          <p className="text-[30px] leading-9 font-bold">
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

      {/* market table */}
      <div className="p-6 rounded-2xl border border-black/10 bg-white/70 space-y-6">
        <div className="space-y-3">
          <h2 className="text-[18px] leading-7 font-bold">দামের সারসংক্ষেপ</h2>
          <PriceSummary markets={p.markets} unit={p.unit} />
        </div>

        <div className="space-y-3">
          <h2 className="text-[18px] leading-7 font-bold">
            বাজারভিত্তিক আজকের দাম
          </h2>
          <MarketList markets={p.markets} />
        </div>
      </div>
    </div>
  );
}