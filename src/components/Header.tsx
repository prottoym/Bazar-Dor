
import Image from "next/image";
import NavLink from "./NavLink";
import CurrentDate from "./CurrentDate";

const Header = () => {
  return (
    <>
    <div className="w-full flex justify-center px-4 border-b border-black/10">
      <div className="flex items-center justify-between w-full max-w-[1164px] h-[68px] px-4">
        {/* Logo */}
        <div className="flex items-center gap-2 w-fit h-[44px]">
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
        </div>

        {/* Other header content */}

        <div className="flex items-center gap-4 w-fit h-10">
          <button className="btn btn-ghost h-10 min-h-10 px-2 text-[16px] font-bold whitespace-nowrap hover:bg-transparent">
            সাইন ইন
          </button>
          <button className="btn btn-success h-10 min-h-10 px-5 rounded-xl border-none bg-[#0A8A3E] text-white text-[16px] font-bold whitespace-nowrap shadow-lg shadow-green-600/40 hover:bg-[#087a37]">
            সাইন আপ
          </button>
        </div>
      </div>
    </div>

     <NavLink />
     </>
  );
};

export default Header;
