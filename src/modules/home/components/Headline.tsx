import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import { Button } from "antd";

interface HeadlineProps {}

export default function Headline({}: HeadlineProps) {
  return (
    <section
      id="home"
      className="w-full bg-[#F4F7FC] px-4 sm:px-[34px] py-12 md:py-16"
    >
      <div className=" mx-auto h-auto min-h-[400px] md:min-h-[500px] lg:min-h-[550px] rounded-2xl relative image-headline text-white">
        <div className="w-full max-w-[550px] h-full flex flex-col gap-y-4 md:gap-y-8 justify-center px-4 md:px-12 py-8">
          <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col">
            Enterprise Strength
          </h1>
          <p className="text-[11px] md:text-base w-full max-w-[360px] lg:w-[520px]">
            Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007, covers an area of 10,000 square meters, 
          </p>
          <Button
            aria-label="Get-Started"
            className="h-auto px-6 py-2 border rounded-3xl flex items-center gap-x-2 w-fit !bg-transparent" 
          >
            <span className="text-base text-white">Get Started</span>
            <span className="inline-block">
              <img src="/icons/arrow-right.svg" alt="arrow-right" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}