import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import Carousel from "@/components/Carousel/Carousel";
import { Button } from "antd";

interface NewsProps {}

// 定义轮播图项目的数据类型
interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function News({}: NewsProps) {
  // 添加carouselItems数据源
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Product 1",
      description: "Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007",
      imageUrl: "/images/image-5.png"
    },
    {
      id: 2,
      title: "Product 2",
      description: "Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007",
      imageUrl: "/images/image-5.png"
    },
    {
      id: 3,
      title: "Product 3",
      description: "Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007",
      imageUrl: "/images/image-5.png"
    },
    {
      id: 4,
      title: "Product 4",
      description: "Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007",
      imageUrl: "/images/image-5.png"
    },
    {
      id: 5,
      title: "Product 5",
      description: "Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007",
      imageUrl: "/images/image-5.png"
    }
  ];

  return (
    <div className="w-full h-auto px-4 sm:px-6 md:px-10 py-10 max-w-full overflow-hidden"
    >
      <h1 className="font-semibold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center mb-8">
          News
      </h1>

      <div className="flex-1 flex-shrink min-w-0">
        <div className="w-full h-full overflow-hidden">
          <Carousel 
            items={carouselItems} 
            itemWidth={348} 
            itemHeight={437} 
            gap={20}
          />
        </div>
      </div>
    </div>
  );
}