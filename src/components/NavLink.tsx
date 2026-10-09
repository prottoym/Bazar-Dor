import Link from "next/link";

const NavLink = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    {
      cache: "force-cache",
    },
  );

  const data = await res.json();

  return (
    <div className="w-full flex justify-center px-4 border-b border-black/10">
      <div className="flex items-center gap-6 w-full max-w-[1164px] h-[49px] px-4 overflow-x-auto">
        {data.map((n) => (
          <Link
            key={n.id}
            href={`/category/${n.slug}`}
            className="flex items-center gap-1.5 shrink-0 cursor-pointer hover:text-[#0A8A3E]"
          >
            <span className="text-[16px] leading-none">{n.icon}</span>
            <span className="text-[14px] font-medium leading-none whitespace-nowrap">
              {n.nameBn}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLink;