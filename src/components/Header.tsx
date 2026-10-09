import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import CurrentDate from "./CurrentDate";
import UserMenu from "./auth/UserMenu";

const Header = () => {
  return (
    <>
      <div className="w-full flex justify-center px-4 border-b border-black/10">
        <div className="flex items-center justify-between w-full max-w-[1164px] h-[68px] px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 w-fit h-[44px]">
            <div className="shrink-0 w-11 h-11 rounded-xl bg-[#0A8A3E] flex items-center justify-center">
              <Image
                src="/logo-icon.png"
                alt="Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <h1 className="text-[20px] leading-[22px] font-bold whitespace-nowrap">
                বাজার দর
              </h1>
              <CurrentDate />
            </div>
          </Link>

          {/* Auth area */}
          <UserMenu />
        </div>
      </div>

      <NavLink />
    </>
  );
};

export default Header;