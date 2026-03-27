import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import { Button } from "antd";

interface QualityProps {}

export default function Quality({}: QualityProps) {
  return (
    <div
      className="w-full h-auto bg-[#02072D] text-white px-4 py-8 lg:px-10"
    >
      <h1 className="font-semibold text-2xl md:text-4xl  flex flex-col">
            Product quality 
            <p>assurance</p> 
      </h1>
      <div className="md:h-[550px] rounded-2xl relative md:flex justify-between items-center gap-6 py-8">
        <img src="/images/image-3.png" alt="" className="w-full h-full object-cover md:w-7/12"/>
        <div className="md:w-[550px] h-full flex flex-col gap-y-4 md:gap-y-8 justify-center p-10">
          <p className="font-semibold">
            High-quality products rely on highly precise instruments to ensure their quality.
          </p>
          <p className="text-[11px] md:text-base ">
            Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007, covers an area of 10,000 square meters, registered capital of 30 million yuan. Our subsidiary, Tocree Machinery, is specialized in finishing finished copper products
          </p>
          <Button
            aria-label="Get-Started"
            className="h-auto px-6 py-2 border rounded-3xl flex items-center gap-x-2 w-fit !bg-transparent" 
          >
            <span className="text-base text-white">Learn more</span>
            <span className="inline-block">
              <img src="/icons/arrow-right.svg" alt="arrow-right" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
