import { Suspense } from "react";
import SignInForm from "@/components/auth/SignIn";
import RedirectToast from "@/components/auth/RedirectToast";

export default function SignInPage() {
  return (
    <>
      <Suspense fallback={null}>
        <RedirectToast />
      </Suspense>

      <h1 className="text-[28px] font-bold leading-9">সাইন ইন</h1>
      <p className="mb-6 mt-1 text-[13px] text-black/60">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>
      <SignInForm />
    </>
  );
}