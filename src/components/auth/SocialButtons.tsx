"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

type Provider = "google" | "github";

const SocialButtons = () => {
  const [pending, setPending] = useState<Provider | null>(null);

  const go = async (provider: Provider) => {
    setPending(provider);
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
    if (error) {
      toast.error("সোশ্যাল লগইন করা যায়নি, আবার চেষ্টা করুন");
      setPending(null);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() => go("google")}
        disabled={pending !== null}
        className="btn btn-outline h-10 min-h-10 rounded-lg border-black/10 bg-white text-[12px] font-semibold"
      >
        {pending === "google" ? (
          <span className="loading loading-spinner loading-xs" />
        ) : (
          <FcGoogle className="text-[16px]" />
        )}
        Google দিয়ে চালিয়ে যান
      </button>
      <button
        type="button"
        onClick={() => go("github")}
        disabled={pending !== null}
        className="btn btn-outline h-10 min-h-10 rounded-lg border-black/10 bg-white text-[12px] font-semibold"
      >
        {pending === "github" ? (
          <span className="loading loading-spinner loading-xs" />
        ) : (
          <FaGithub className="text-[16px]" />
        )}
        GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
};

export default SocialButtons;