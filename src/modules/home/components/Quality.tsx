import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import ThemeButton from "@/components/ThemeButton/ThemeButton";
import Image from 'next/image';

interface QualityProps {}

export default function Quality({}: QualityProps) {
  return (
    <div
      className="w-full h-auto bg-[#02072D] text-white px-4 sm:px-[34px] py-8 md:py-12"
    >
      <h1 className="font-medium text-2xl md:text-5xl lg:text-6xl  flex flex-col">
            Product quality 
            <p>assurance</p> 
      </h1>
      <div className="md:h-[550px] rounded-2xl relative md:flex justify-between items-center gap-6 py-8">
        <Image 
          src="/images/image-3.png" 
          alt="Product quality assurance" 
          className="w-full h-full object-cover md:w-7/12"
          width={768}
          height={550}
        />
        <div className="md:w-[550px] h-full flex flex-col gap-y-4 md:gap-y-8 justify-center p-10">
          <p className="font-medium">
            High-quality products rely on highly precise instruments to ensure their quality.
          </p>
          <p className="text-[11px] md:text-base font-[400]">
            Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007, covers an area of 10,000 square meters, registered capital of 30 million yuan. Our subsidiary, Tocree Machinery, is specialized in finishing finished copper products
          </p>
          <ThemeButton
            theme="dark"
            text="Learn more"
          />
        </div>
      </div>
    </div>
  );
}