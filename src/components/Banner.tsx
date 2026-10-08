
import Image from "next/image";
import CurrentDate from "./CurrentDate";

const Banner = () => {
  return (
    <div className="w-full max-w-[1152px] mx-auto px-4 py-6">
      <div className="flex items-center justify-between w-full max-w-[1120px] h-[283px] mx-auto pl-4 pr-16 rounded-3xl border border-black/10 bg-white/60">
        {/*Text*/}
        <div className="w-[576px] h-[217px] flex flex-col justify-between">
          <div className="w-fit h-[28px] flex items-center px-3 rounded-full bg-[#DDF0E3] text-[#0A8A3E] font-medium">
            {/*Date*/}
            <CurrentDate />
          </div>

          <div className="w-[477px] h-[45px]">
            {/*Title*/}
            <h1 className="text-[36px] leading-[45px] font-bold whitespace-nowrap">
              আজকের বাজারের দাম এক নজরে
            </h1>
          </div>

          <div>
            <p className="w-[576px] h-[48px] text-[16px] leading-6 text-black/60">
              {/*details*/}
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>
          </div>

          <div>
            {/*button*/}
            <button className="btn btn-success w-[118.7px] h-10 min-h-10 px-0 rounded-xl border-none bg-[#0A8A3E] text-white text-[14px] font-bold whitespace-nowrap shadow-lg shadow-green-600/40 hover:bg-[#087a37]">
              <h3 className="w-[73px] h-[21px] leading-[21px]">
                সব পণ্য দেখুন
              </h3>
            </button>
          </div>
        </div>

        {/*Image*/}
        <div className="w-[315px] h-[263px] shrink-0">
          <Image
            src="/bazar-hero.png"
            alt="Image"
            width={315}
            height={263}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
