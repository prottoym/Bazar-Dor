"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const options = [
  { value: "", label: "ডিফল্ট" },
  { value: "asc", label: "দাম: কম থেকে বেশি" },
  { value: "desc", label: "দাম: বেশি থেকে কম" },
];

const SortControl = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams.get("sort") ?? "";

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("sort", value);
    else params.delete("sort");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };

  return (
    <label className="flex w-full sm:w-auto items-center gap-2 text-[13px]">
      <span className="shrink-0 text-black/60">সাজান:</span>
      <select
        value={current}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 w-full sm:w-auto px-3 rounded-lg border border-black/10 bg-white text-[13px] outline-none focus:border-[#0A8A3E]"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SortControl;