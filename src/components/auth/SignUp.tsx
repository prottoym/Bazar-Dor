"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "./SocialButtons";

const emailRe = /^\S+@\S+\.\S+$/;

const SignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const password = String(fd.get("password") ?? "");
    const confirm = String(fd.get("confirm") ?? "");

    if (!name) {
      toast.error("আপনার নাম লিখুন");
      return;
    }
    if (!emailRe.test(email)) {
      toast.error("সঠিক ইমেইল দিন");
      return;
    }
    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }
    if (password !== confirm) {
      toast.error("দুটি পাসওয়ার্ড মিলছে না");
      return;
    }

    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setLoading(false);

    if (error) {
      toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি");
      return;
    }
    toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এখন সাইন ইন করুন");
    router.push("/signin");
  }

  return (
    <div className="card w-full max-w-[400px] border border-black/10 bg-white/70 shadow-sm">
      <div className="card-body gap-3 p-6">
        <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[13px]">নাম</legend>
            <input
              name="name"
              type="text"
              placeholder="যেমন: রফিক উদ্দিন"
              className="input w-full"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[13px]">ইমেইল</legend>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="input w-full"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[13px]">পাসওয়ার্ড</legend>
            <input
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="input w-full"
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[13px]">
              পাসওয়ার্ড নিশ্চিত করুন
            </legend>
            <input
              name="confirm"
              type="password"
              placeholder="আবার লিখুন"
              className="input w-full"
            />
          </fieldset>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-success mt-1 w-full border-none bg-[#0A8A3E] text-white shadow-lg shadow-green-600/40 hover:bg-[#087a37]"
          >
            {loading && <span className="loading loading-spinner loading-sm" />}
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <div className="divider my-1 text-[12px] text-black/60">অথবা</div>

        <SocialButtons />

        <p className="mt-2 text-center text-[13px]">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="font-semibold text-[#0A8A3E]">
            সাইন ইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;