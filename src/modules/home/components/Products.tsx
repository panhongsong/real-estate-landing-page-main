import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import Carousel from "@/components/Carousel/Carousel";
import { Button } from "antd";

interface ProductsProps {}

// 定义轮播图项目的数据类型
interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Products({}: ProductsProps) {
  // 添加carouselItems数据源
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Product 1",
      description: "High quality real estate equipment",
      imageUrl: "/images/image-2.png"
    },
    {
      id: 2,
      title: "Product 2",
      description: "Advanced construction machinery",
      imageUrl: "/images/image-2.png"
    },
    {
      id: 3,
      title: "Product 3",
      description: "Durable building materials",
      imageUrl: "/images/image-2.png"
    },
    {
      id: 4,
      title: "Product 4",
      description: "Innovative design tools",
      imageUrl: "/images/image-2.png"
    },
    {
      id: 5,
      title: "Product 5",
      description: "Innovative design tools",
      imageUrl: "/images/image-2.png"
    }
  ];

  return (
    <div className="w-full px-4 sm:px-[34px] py-8 md:py-12 mx-auto">
      <h1 className="font-semibold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center mb-8 md:mb-12">
          JINGCHENG products
      </h1>

      <div className="h-auto min-h-[500px] md:h-[608px] rounded-2xl flex flex-col-reverse md:flex-row gap-6">
        <div className="w-full md:w-[300px] h-auto min-h-[200px] md:h-full flex flex-col gap-y-4 md:gap-y-8 justify-center flex-shrink-0 p-4 md:p-0">
          <p className="text-[10px] md:text-base w-full">
            Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007, covers an area of 10,000 square meters, registered capital of 30 million yuan. Our subsidiary, Tocree Machinery
          </p>
          <Button
            aria-label="Get-Started"
            className="h-auto px-6 py-2 border rounded-3xl flex items-center gap-x-2 w-fit" 
          >
            <span className="text-base ">Learn more</span>
            <span className="inline-block">
              <img src="/icons/arrow-right.svg" alt="arrow-right" />
            </span>
          </Button>
        </div>
        <div className="flex-1 flex-shrink min-w-0">
          <div className="w-full h-auto md:h-full overflow-hidden">
            <Carousel 
              items={carouselItems} 
              itemWidth={315} 
              itemHeight={400} 
              gap={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}