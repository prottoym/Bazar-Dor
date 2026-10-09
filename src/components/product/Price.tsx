import { Product } from "@/Types";


const bn = (n: number) => Math.round(n).toLocaleString("bn-BD");

const unitMap: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  hali: "হালি",
};

type Props = { markets: Product["markets"]; unit: string };

const Price= ({ markets, unit }: Props) => {
  const min = Math.min(...markets.map((m) => m.min));
  const max = Math.max(...markets.map((m) => m.max));
  const avg =
    markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length;

  const items = [
    {
      label: "সর্বনিম্ন দাম",
      value: min,
      color: "text-green-600",
      note: "সবচেয়ে কম দামের বাজার",
    },
    {
      label: "সর্বোচ্চ দাম",
      value: max,
      color: "text-red-600",
      note: "সবচেয়ে বেশি দামের বাজার",
    },
    {
      label: "গড় দাম",
      value: avg,
      color: "text-green-600",
      note: `প্রতি ${unitMap[unit] ?? unit}-এর হিসাব`,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      {items.map((i) => (
        <div
          key={i.label}
          className="p-4 rounded-xl border border-black/10 bg-white/70"
        >
          <p className="text-[11px] sm:text-[12px] leading-4 text-black/60">
            {i.label}
          </p>
          <p className={`mt-1 leading-7 font-bold ${i.color}`}>
            <span className="text-[20px] sm:text-[22px]">{bn(i.value)}</span>{" "}
            <span className="text-[13px]">টাকা</span>
          </p>
          <p className="mt-0.5 text-[11px] leading-4 text-black/60">
            {i.note}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Price ;