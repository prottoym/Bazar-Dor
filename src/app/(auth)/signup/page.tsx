import { Suspense } from "react";
import RedirectToast from "@/components/auth/RedirectToast";
import SignUpForm from "@/components/auth/SignUp";

export default function SignUpPage() {
  return (
    <>
      <h1 className="text-[28px] font-bold leading-9">অ্যাকাউন্ট তৈরি করুন</h1>
      <p className="mb-6 mt-1 text-[13px] text-black/60">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>
      <SignUpForm />
    </>
  );
}