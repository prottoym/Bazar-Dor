import Link from "next/link";
import { Product } from "@/Types";
import ChangeBadge from "./ChangeBadge";

const unitMap: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  hali: "হালি",
};

const ProductCard = ({ p }: { p: Product }) => (
  <Link
    href={`/product/${p.slug}`}
    className="block min-w-0 p-3 sm:p-4 rounded-xl border border-black/10 bg-white/70 transition hover:shadow-md hover:-translate-y-0.5"
  >
    {/* Top: emoji + name + unit */}
    <div className="flex items-center gap-2.5">
      <div className="shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-black/5 flex items-center justify-center text-[20px] sm:text-[22px]">
        {p.image}
      </div>
      <div className="min-w-0">
        <h3 className="text-[14px] sm:text-[15px] leading-5 font-bold truncate">
          {p.nameBn}
        </h3>
        <p className="text-[11px] sm:text-[12px] leading-4 text-black/60">
          প্রতি {unitMap[p.unit] ?? p.unit}
        </p>
      </div>
    </div>

    {/* Bottom: price + badge */}
    <div className="mt-3">
      <p className="text-[11px] sm:text-[12px] leading-4 text-black/60">
        আজকের দাম
      </p>
      <div className="flex items-center justify-between gap-2">
        <p className="leading-6 whitespace-nowrap">
          <span className="text-[16px] sm:text-[18px] font-bold">
            {Number(p.today).toLocaleString("bn-BD")}
          </span>{" "}
          <span className="text-[12px] sm:text-[13px]">টাকা</span>
        </p>
        <ChangeBadge change={p.change} />
      </div>
    </div>
  </Link>
);

export default ProductCard;