
"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getDate = () =>
  new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

const CurrentDate = () => {
  const date = useSyncExternalStore(subscribe, getDate, () => "");

  return (
    <p
      className="text-[12px] leading-[16px] whitespace-nowrap min-h-[16px]"
      suppressHydrationWarning
    >
      {date}
    </p>
  );
};

export default CurrentDate;