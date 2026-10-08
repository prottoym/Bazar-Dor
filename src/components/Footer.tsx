
const Footer = () => {
  return (
    <div className="w-full flex justify-center border-t border-black/10">

      <div className="flex items-center justify-between w-full max-w-[1152px] h-[68px]">

        <div className="w-fit h-5 flex items-center">

            {/*Left*/}

          <h2 className="text-[14px] leading-5 whitespace-nowrap">
            বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
          </h2>

        </div>

        <div className="w-fit h-5 flex items-center">

            {/*Right*/}

          <h2 className="text-[14px] leading-5 whitespace-nowrap">
            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
          </h2>

        </div>

      </div>
    </div>
  );
};

export default Footer;