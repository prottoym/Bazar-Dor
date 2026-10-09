import CardSkeleton from "@/components/category/CardSkeleton";

export default function Loading() {
  return (
    <div className="w-full max-w-[1152px] mx-auto px-4 py-6">
      <div className="h-8 w-48 rounded bg-black/10 animate-pulse" />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
