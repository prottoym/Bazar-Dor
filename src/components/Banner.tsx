
import Image from "next/image";
import CurrentDate from "./CurrentDate";

const Banner = () => {
  return (
    <div className="w-full max-w-[1152px] mx-auto px-4 py-6">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 w-full max-w-[1120px] lg:h-[283px] mx-auto p-6 lg:py-0 lg:pl-4 lg:pr-16 rounded-3xl border border-black/10 bg-white/60">
        {/*Text*/}
        <div className="w-full lg:w-[576px] lg:h-[217px] flex flex-col gap-4 lg:gap-0 lg:justify-between">
          <div className="w-fit h-[28px] flex items-center px-3 rounded-full bg-[#DDF0E3] text-[#0A8A3E] font-medium">
            {/*Date*/}
            <CurrentDate />
          </div>

          <div className="w-full lg:w-[477px] lg:h-[45px]">
            {/*Title*/}
            <h1 className="text-[26px] sm:text-[32px] lg:text-[36px] leading-tight lg:leading-[45px] font-bold lg:whitespace-nowrap">
              আজকের বাজারের দাম এক নজরে
            </h1>
          </div>

          <div>
            <p className="w-full lg:w-[576px] lg:h-[48px] text-[14px] lg:text-[16px] leading-6 text-black/60">
              {/*details*/}
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>
          </div>

          <div>
            {/*button*/}
            <a
              href="#সব-পণ্য"
              className="btn btn-success w-[118.7px] h-10 min-h-10 px-0 rounded-xl border-none bg-[#0A8A3E] text-white text-[14px] font-bold whitespace-nowrap shadow-lg shadow-green-600/40 hover:bg-[#087a37]"
            >
              <span className="w-[73px] h-[21px] leading-[21px]">
                সব পণ্য দেখুন
              </span>
            </a>
          </div>
        </div>

        {/*Image*/}
        <div className="w-[200px] h-[167px] sm:w-[260px] sm:h-[217px] lg:w-[315px] lg:h-[263px] shrink-0">
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