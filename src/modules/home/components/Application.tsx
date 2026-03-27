'use client';

import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import { Carousel, Button } from "antd";
import "@/styles/carousel-custom.css";

interface ApplicationProps {}

// 定义轮播图项目的数据类型
interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Application({}: ApplicationProps) {
  // 添加carouselItems数据源
  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Product 1",
      description: "High quality real estate equipment",
      imageUrl: "/images/image-4.png"
    },
    {
      id: 2,
      title: "Product 2",
      description: "Advanced construction machinery",
      imageUrl: "/images/image-4.png"
    },
    {
      id: 3,
      title: "Product 3",
      description: "Durable building materials",
      imageUrl: "/images/image-4.png"
    },
    {
      id: 4,
      title: "Product 4",
      description: "Innovative design tools",
      imageUrl: "/images/image-4.png"
    },
    {
      id: 5,
      title: "Product 5",
      description: "Innovative design tools",
      imageUrl: "/images/image-4.png"
    }
  ];

  return (
    <div className="w-full h-auto px-4 sm:px-6 md:px-10 py-10 max-w-full overflow-hidden"
    >
      <h1 className="font-semibold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center mb-8">
          JINGCHENG products
      </h1>

      <div className="h-[608px] rounded-2xl flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[300px] h-[250px] md:h-full flex flex-col gap-y-4 md:gap-y-8 justify-center flex-shrink-0">
          <p className="text-[11px] md:text-base w-full">
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
          <div className="w-full h-full overflow-hidden">
            <Carousel 
              dots={{ className: 'custom-dot' }} 
              arrows 
              autoplay 
              className="custom-carousel"
            >
              {carouselItems.map((item) => (
                <div key={item.id} className="h-[508px]">
                  <div className=" rounded-xl  overflow-hidden w-full h-full flex flex-col">
                    <div className="w-full h-[70%]">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col h-[30%]">
                      <h3 className="font-bold text-lg truncate">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 truncate">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}