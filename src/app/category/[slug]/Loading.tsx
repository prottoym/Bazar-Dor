import CardSkeleton from "@/components/category/CardSkeleton";

export default function Loading() {
  return (
    <div className="w-full max-w-[1152px] mx-auto px-4 py-4 sm:py-6">
      <div className="skeleton h-8 w-40" />
      <div className="mt-4 grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}