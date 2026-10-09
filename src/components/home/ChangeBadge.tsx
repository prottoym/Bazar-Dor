import { Product } from "@/Types";


const ChangeBadge = ({ change }: { change: Product["change"] }) => {
  const style =
    change.dir === "up"
      ? "text-red-600 bg-red-50"
      : change.dir === "down"
        ? "text-green-600 bg-green-50"
        : "text-gray-500 bg-gray-100";

  const icon = change.dir === "up" ? "▲" : change.dir === "down" ? "▼" : "—";

  return (
    <span
      className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] leading-4 font-semibold whitespace-nowrap ${style}`}
    >
      {icon}{" "}
      {Number(change.pct).toLocaleString("bn-BD", { minimumFractionDigits: 1 })}%
    </span>
  );
};

export default ChangeBadge;