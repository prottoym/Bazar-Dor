
const CardSkeleton = () => (
  <div className="p-3 sm:p-4 rounded-xl border border-black/10 bg-white/70 animate-pulse">
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-black/10" />
      <div className="space-y-2">
        <div className="h-3.5 w-24 rounded bg-black/10" />
        <div className="h-3 w-14 rounded bg-black/10" />
      </div>
    </div>
    <div className="mt-3 space-y-2">
      <div className="h-3 w-16 rounded bg-black/10" />
      <div className="flex items-center justify-between">
        <div className="h-5 w-20 rounded bg-black/10" />
        <div className="h-5 w-14 rounded-full bg-black/10" />
      </div>
    </div>
  </div>
);

export default CardSkeleton;