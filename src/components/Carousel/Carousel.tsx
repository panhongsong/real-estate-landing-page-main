'use client';
import React, { useState, useEffect } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface CarouselItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
  itemWidth?: number;
  itemHeight?: number;
  gap?: number;
}

const Carousel: React.FC<CarouselProps> = ({ 
  items, 
  itemWidth = 315, 
  itemHeight = 608,
  gap = 40,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);

  // 根据容器宽度计算可见项目数量
  useEffect(() => {
    const calculateVisibleItems = () => {
      // 获取容器实际宽度
      const carouselContainer = document.querySelector('.carousel-container');
      const width = carouselContainer?.clientWidth || 0;
      console.log('Carousel container width:', width);
      setContainerWidth(width);
      
      const calculatedVisibleItems = Math.floor(width / itemWidth);
      // 至少显示1个项目，同时不超过总项目数
      const newVisibleItems = Math.max(1, Math.min(calculatedVisibleItems, items.length));
      setVisibleItems(newVisibleItems);
    };

    // 初始计算
    calculateVisibleItems();
    
    // 监听窗口大小变化
    window.addEventListener('resize', calculateVisibleItems);
    
    return () => {
      window.removeEventListener('resize', calculateVisibleItems);
    };
  }, [itemWidth, items.length]);

  const goToPrev = () => {
    const prevIndex = Math.max(0, currentIndex - visibleItems);
    setCurrentIndex(prevIndex);
  };

  const goToNext = () => {
    // 计算最大索引，确保不会超出边界
    const maxIndex = Math.max(0, items.length - visibleItems);
    const nextIndex = Math.min(currentIndex + visibleItems, maxIndex);
    setCurrentIndex(nextIndex);
  };

  // 计算实际的偏移量，确保不会超出边界
  const getMaxOffset = () => {
    const totalItemsWidth = items.length * (itemWidth + gap);
    const offset = currentIndex * itemWidth + currentIndex * gap; // 当前偏移量
    const maxPossibleOffset = Math.max(0, totalItemsWidth - containerWidth);
    return Math.min(offset, maxPossibleOffset);
  };

  const actualOffset = getMaxOffset();

  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden carousel-container">
      {/* 箭头按钮区域 */}
      <div className="flex justify-end gap-2 mb-2">
        <button
          onClick={goToPrev}
          className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 disabled:opacity-50"
          aria-label="Previous slide"
          disabled={currentIndex <= 0}
        >
          <LeftOutlined />
        </button>
        <button
          onClick={goToNext}
          className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 disabled:opacity-50"
          aria-label="Next slide"
          disabled={currentIndex >= Math.max(0, items.length - visibleItems)}
        >
          <RightOutlined />
        </button>
      </div>
      
      {/* 轮播项目容器 */}
      <div className="relative w-full h-full overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out h-full" 
          style={{ 
            transform: `translateX(-${actualOffset}px)`,
            maxWidth: '100%'
          }}
        >
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 mx-1 transition-all duration-300 hover:scale-[1.02] h-full"
              style={{ width: `${itemWidth}px`, height: `${itemHeight}px`, marginRight: `${gap}px`  }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full h-full flex flex-col">
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
        </div>
      </div>
    </div>
  );
};

export default Carousel;