import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const unitMap: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  hali: "হালি",
};

const Marquee = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 3600,
      },
    },
  );
  const data = await res.json();

  const headlines = data;

  return (
    <div className="w-full h-[37px] flex items-center border-b border-black/10 overflow-hidden">
      {/*headlines map*/}

      <MarqueeText direction="right" duration={15}>
        {headlines?.map((h) => (
          <span
            key={h.id}
            className="inline-flex items-center gap-2 mx-6 text-[14px] leading-none whitespace-nowrap"
          >
            <span className="text-[16px]">{h.image}</span>
            <span className="font-medium">{h.nameBn}</span>
            <span>
              {Number(h.today).toLocaleString("bn-BD")} টাকা/
              {unitMap[h.unit] ?? h.unit}
            </span>
            <span
              className={`font-semibold ${
                h.change.dir === "up" ? "text-red-600" : "text-green-600"
              }`}
            >
              {h.change.dir === "up" ? "▲" : "▼"}{" "}
              {Number(h.change.pct).toLocaleString("bn-BD")}%
            </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;