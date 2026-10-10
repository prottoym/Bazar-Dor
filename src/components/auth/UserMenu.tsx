"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiLogOut, FiUser } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import UserAvatar from "./UserAvatar";

const UserMenu = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <div className="skeleton h-10 w-32 rounded-xl" />;
  }

  if (!session) {
    return (
      <div className="flex items-center gap-4 w-fit h-10">
        <Link
          href="/signin"
          className="btn btn-ghost h-10 min-h-10 px-2 text-[14px] sm:text-[16px] font-bold whitespace-nowrap hover:bg-transparent"
        >
          সাইন ইন
        </Link>
        <Link
          href="/signup"
          className="btn btn-success h-10 min-h-10 px-3 sm:px-5 rounded-xl border-none bg-[#0A8A3E] text-white text-[14px] sm:text-[16px] font-bold whitespace-nowrap shadow-lg shadow-green-600/40 hover:bg-[#087a37]"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  const { user } = session;
  const closeMenu = () =>
    (document.activeElement as HTMLElement | null)?.blur();

  const onSignOut = async () => {
    closeMenu();
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে সাইন আউট হয়েছে");
          router.push("/");
          router.refresh();
        },
        onError: () => {
          toast.error("সাইন আউট করা যায়নি, আবার চেষ্টা করুন");
        },
      },
    });
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-2 h-10 cursor-pointer"
      >
        <UserAvatar name={user.name} image={user.image} />
        <span className="text-[14px] font-medium">
          {user.name.split(" ")[0]}
        </span>
        <span className="text-[8px] text-black/50">▼</span>
      </div>

      <div
        tabIndex={0}
        className="dropdown-content z-20 mt-2 w-60 rounded-xl border border-black/10 bg-base-100 p-2 shadow-lg"
      >
        <div className="px-3 py-2">
          <p className="text-[14px] font-bold leading-5">{user.name}</p>
          <p className="text-[12px] leading-4 text-black/60 break-all">
            {user.email}
          </p>
        </div>
        <ul className="menu w-full p-0 text-[13px]">
          <li>
            <Link href="/profile" onClick={closeMenu}>
              <FiUser /> আমার প্রোফাইল
            </Link>
          </li>
          <li>
            <button onClick={onSignOut} className="text-red-600">
              <FiLogOut /> সাইন আউট
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;