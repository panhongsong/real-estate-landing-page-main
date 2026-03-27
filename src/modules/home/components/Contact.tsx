import Image from "next/image";
import ThemeButton from "@/components/ThemeButton/ThemeButton";

export default function Contact() {
  return (
    <section id="contact" className="w-full px-4 sm:px-[34px] pb-8 md:pb-12 bg-white mx-auto">
      <div className="mx-auto">
        <div className="flex items-center mb-6 md:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#2A3B8F] mr-2"></span>
          <span className="text-[#2A3B8F] text-sm md:text-base font-medium">Learn more</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A3B8F] mb-8 md:mb-10">Learn more about enterprises</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 左上大图 */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[300px] md:min-h-[320px] flex flex-col justify-between bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/image-3.jpg)' }}
          >
            <div className="p-6 md:p-8">
              <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-6 md:mb-8 max-w-[90%]">
                Precision equipment manufacturing of high-precision products
              </div>
              <ThemeButton
                theme="dark"
                text="Learn more"
              />
            </div>
          </div>
          {/* 右侧布局 */}
          <div className="grid grid-cols-1 grid-rows-2 gap-6">
            <div
              className="relative rounded-2xl overflow-hidden min-h-[280px] flex flex-col justify-between bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/image-4.jpg)' }}
            >
              <div className="p-6 md:p-8">
                <div className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-6 max-w-[90%]">
                  Our products are sold all over the world.
                </div>
                <ThemeButton
                  theme="dark"
                  text="Learn more"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 左下纯色卡片 */}
              <div className="relative rounded-2xl bg-[#2A3B8F] min-h-[200px] flex flex-col justify-between p-6 md:p-8">
                <div className="text-white text-base md:text-xl lg:text-2xl font-semibold mb-4">
                  High-quality products rely on highly precise instruments to ensure their quality.
                </div>
                <ThemeButton
                  theme="dark"
                  text="Learn more"
                />
              </div>
              {/* 右下下载卡片 */}
              <div className="relative rounded-2xl bg-[#F5F7FA] min-h-[200px] flex flex-col justify-between p-6 md:p-8">
                <div className="text-[#2A3B8F] text-base md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">Download Catalog</div>
                <div className="flex items-center gap-3 md:gap-4 mb-4">
                  <Image src="/images/image-5.jpg" alt="catalog1" width={60} height={75} className="rounded-lg shadow" />
                  <Image src="/images/image-6.jpg" alt="catalog2" width={60} height={75} className="rounded-lg shadow" />
                </div>
                <ThemeButton
                  theme="light"
                  text="Download"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}