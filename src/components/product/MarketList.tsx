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
    <div className="rounded-xl border border-black/10 bg-white/70 overflow-x-auto">
      <table className="w-full min-w-[640px] text-[13px]">
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
              <td className="px-4 py-3 text-right">{fmt(m.min)} টাকা</td>
              <td className="px-4 py-3 text-right">{fmt(m.max)} টাকা</td>
              <td className="px-4 py-3 text-right font-bold">
                {fmt(m.avg)} টাকা
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketList;