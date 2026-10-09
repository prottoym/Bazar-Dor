import Link from "next/link";
import { Product } from "@/Types";
import ChangeBadge from "./ChangeBadge";


const unitMap: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const ProductCard = ({ p }: { p: Product }) => (
  <Link
    href={`/product/${p.slug}`}
    className="block p-3 rounded-xl border border-black/10 bg-white/70 hover:shadow-md transition"
  >
    {/* emoji and name and unit */}
    <div className="flex items-center gap-2.5">
      <div className="shrink-0 w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center text-[20px]">
        {p.image}
      </div>
      <div className="min-w-0">
        <h3 className="text-[14px] leading-5 font-bold truncate">{p.nameBn}</h3>
        <p className="text-[11px] leading-4 text-black/60">
          প্রতি {unitMap[p.unit] ?? p.unit}
        </p>
      </div>
    </div>

    {/* button price + icon*/}
    <div className="mt-3">
      <p className="text-[11px] leading-4 text-black/60">আজকের দাম</p>
      <div className="flex items-center justify-between gap-2">
        <p className="leading-6">
          <span className="text-[16px] font-bold">
            {Number(p.today).toLocaleString("bn-BD")}
          </span>{" "}
          <span className="text-[12px]">টাকা</span>
        </p>
        <ChangeBadge change={p.change} />
      </div>
    </div>
  </Link>
);

export default ProductCard;