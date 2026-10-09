import { Product } from "@/Types";

{/* bangla price value */}

const fmt = (n: number) =>
  n.toLocaleString("bn-BD", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  });

const MarketList = ({ markets }: { markets: Product["markets"] }) => {
  const rows = markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  return (
    <>
  
      <ul className="md:hidden space-y-2">
        {rows.map((m, i) => (
          <li
            key={i}
            className="rounded-xl border border-black/10 bg-white/70 p-3"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[14px] font-semibold leading-5">
                  {m.market}
                </p>
                <p className="text-[12px] leading-4 text-black/60">
                  {m.division}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-[11px] leading-4 text-black/60">গড়</p>
                <p className="text-[15px] font-bold leading-5">
                  {fmt(m.avg)} টাকা
                </p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between gap-2 border-t border-black/5 pt-2 text-[12px] text-black/70">
              <span>সর্বনিম্ন: {fmt(m.min)} টাকা</span>
              <span>সর্বাধিক: {fmt(m.max)} টাকা</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="hidden md:block rounded-xl border border-black/10 bg-white/70 overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-black/60 text-left">
              <th className="px-4 py-3 font-normal">বাজার</th>
              <th className="px-4 py-3 font-normal">বিভাগ</th>
              <th className="px-4 py-3 font-normal text-right">সর্বনিম্ন</th>
              <th className="px-4 py-3 font-normal text-right">সর্বাধিক</th>
              <th className="px-4 py-3 font-normal text-right">গড়</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((m, i) => (
              <tr
                key={i}
                className="border-t border-black/10 hover:bg-black/[0.02]"
              >
                <td className="px-4 py-3 font-medium">{m.market}</td>
                <td className="px-4 py-3 text-black/70">{m.division}</td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  {fmt(m.min)} টাকা
                </td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  {fmt(m.max)} টাকা
                </td>
                <td className="px-4 py-3 text-right font-bold whitespace-nowrap">
                  {fmt(m.avg)} টাকা
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MarketList;