"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FiLogOut } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import UserAvatar from "@/components/auth/UserAvatar";

function NameForm({ initialName }: { initialName: string }) {
  const [name, setName] = useState(initialName);
  const [saving, setSaving] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("নাম খালি রাখা যাবে না");
      return;
    }
    setSaving(true);
    const { error } = await authClient.updateUser({ name: name.trim() });
    setSaving(false);
    if (error) {
      toast.error("আপডেট করা যায়নি");
      return;
    }
    toast.success("প্রোফাইল আপডেট হয়েছে");
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-[13px]">নাম</legend>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input w-full"
        />
      </fieldset>
      <button
        type="submit"
        disabled={saving}
        className="btn btn-success w-full border-none bg-[#0A8A3E] text-white shadow-lg shadow-green-600/40 hover:bg-[#087a37]"
      >
        {saving && <span className="loading loading-spinner loading-sm" />}
        আপডেট
      </button>
    </form>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const onSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে সাইন আউট হয়েছে");
          router.push("/");
          router.refresh();
        },
        onError: () => toast.error("সাইন আউট করা যায়নি"),
      },
    });
  };

  return (
    <div className="mx-auto w-full max-w-[640px] space-y-4 px-4 py-10">
      <div>
        <h1 className="text-[24px] font-bold leading-8">আমার প্রোফাইল</h1>
        <p className="text-[12px] text-black/60">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      {isPending || !session ? (
        <>
          <div className="skeleton h-24 w-full rounded-2xl" />
          <div className="skeleton h-52 w-full rounded-2xl" />
        </>
      ) : (
        <>
          <div className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white/70 p-5">
            <div className="flex min-w-0 items-center gap-4">
              <UserAvatar
                name={session.user.name}
                image={session.user.image}
                className="w-14 h-14"
              />
              <div className="min-w-0">
                <p className="text-[16px] font-bold leading-6">
                  {session.user.name}
                </p>
                <p className="truncate text-[13px] text-black/60">
                  {session.user.email}
                </p>
              </div>
            </div>
            <button
              onClick={onSignOut}
              className="btn btn-outline btn-error btn-sm h-9 rounded-lg text-[12px]"
            >
              <FiLogOut /> সাইন আউট
            </button>
          </div>

          <div className="space-y-4 rounded-2xl border border-black/10 bg-white/70 p-5">
            <h2 className="text-[16px] font-bold">তথ্য</h2>
            <NameForm initialName={session.user.name} />
          </div>
        </>
      )}
    </div>
  );
}