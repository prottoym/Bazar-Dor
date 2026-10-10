"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const RedirectToast = () => {
  const searchParams = useSearchParams();
  const shown = useRef(false);

  useEffect(() => {
    if (searchParams.get("redirected") && !shown.current) {
      shown.current = true;
      toast.error("এই পেজ দেখতে আগে সাইন ইন করুন", { id: "auth-redirect" });
    }
  }, [searchParams]);

  return null;
};

export default RedirectToast;