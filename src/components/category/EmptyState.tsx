import Link from "next/link";


const EmptyState = () => (
  <div className="flex flex-col items-center justify-center text-center py-16 sm:py-24 gap-3">
    <p className="text-[48px] sm:text-[64px] leading-none font-bold text-black/20">
      404
    </p>
    <h2 className="text-[18px] sm:text-[22px] font-bold">
      কোনো পণ্য পাওয়া যায়নি
    </h2>
    <p className="max-w-sm text-[13px] sm:text-[14px] text-black/60">
      এই ক্যাটাগরিতে কোনো পণ্য নেই অথবা ক্যাটাগরিটি সঠিক নয়।
    </p>
    <Link
      href="/"
      className="mt-2 inline-flex items-center h-10 px-5 rounded-xl bg-[#0A8A3E] text-white text-[14px] font-bold shadow-lg shadow-green-600/40 hover:bg-[#087a37]"
    >
      হোম পেজে ফিরে যান
    </Link>
  </div>
);

export default EmptyState;