import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[1152px] flex-col items-center px-4 py-10">
      {children}
      <Link
        href="/"
        className="mt-6 text-[12px] text-black/60 hover:underline"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}