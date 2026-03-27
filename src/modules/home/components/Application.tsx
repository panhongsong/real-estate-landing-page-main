'use client';

import { MENU_ITEMS_HEADLINE } from "@/common/constant/menu";
import { Carousel } from "antd";
import "@/styles/carousel-custom.css";
import ThemeButton from "@/components/ThemeButton/ThemeButton";

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
    <div className="w-full h-auto px-4 sm:px-6 md:px-10  max-w-full overflow-hidden"
    >
      <h1 className="font-medium text-2xl md:text-5xl lg:text-6xl text-[#2A3B8F] mb-8">
          JINGCHENG products
      </h1>

      <div className="  rounded-2xl flex flex-col-reverse md:flex-row gap-6 ">
        <div className="w-full h-full md:w-[300px] md:min-h-[500px] md:h-full flex flex-col gap-y-4 md:gap-y-8 justify-center flex-shrink-0 p-4 md:p-0">
          <p className="text-[11px] md:text-base w-full font-normal">
            Jiashan Jingcheng Machinery Co., Ltd. is a professional casting copper alloy blank company, established in December 2007, covers an area of 10,000 square meters, registered capital of 30 million yuan. Our subsidiary, Tocree Machinery
          </p>
          <ThemeButton
            theme="light"
            text="Learn more"
          />
        </div>
        <div className="flex-1 flex-shrink min-w-0">
          <div className="w-full h-auto md:h-full overflow-hidden">
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
                      <h3 className="font-medium text-lg truncate">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 truncate font-normal">{item.description}</p>
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