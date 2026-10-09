
const Footer = () => {
  return (
    <div className="w-full flex justify-center border-t border-black/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 w-full max-w-[1152px] px-4 py-4 sm:py-0 sm:h-[68px]">
        <h2 className="text-[13px] sm:text-[14px] leading-5">
          বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </h2>
        <h2 className="text-[13px] sm:text-[14px] leading-5">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </h2>
      </div>
    </div>
  );
};

export default Footer;