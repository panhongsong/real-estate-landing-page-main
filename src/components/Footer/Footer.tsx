'use client';

import Image from 'next/image';
import Link from 'next/link';
import ThemeButton from '@/components/ThemeButton/ThemeButton';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1033] md:px-[170px] text-white pt-16 pb-8 relative overflow-hidden font-sans">
      {/* 齿轮SVG背景装饰 */}
      <svg
        className="absolute right-0 bottom-0 z-0 pointer-events-none hidden md:block"
        width="1200"
        height="800"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ right: 0, bottom: 0 }}
      >
        <path
          d="M1200,800 C900,400 600,600 400,700 Q300,750 0,800"
          stroke="#3B4260"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M1200,0 Q1000,200 900,400 Q800,600 600,700 Q400,800 0,800"
          stroke="#3B4260"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      <div className="relative z-10 mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* 左侧内容 */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-between">
          {/* LOGO */}
          <div className="flex flex-col items-start mb-8 gap-3">
            <Image src="/logo-dark.svg" alt="JCJX LOGO" width={48} height={48} className="h-12 w-auto mr-4" />
            <div>
              <div className="text-xl font-bold tracking-wider leading-tight">嘉善精诚机械股份有限公司</div>
              <div className="text-xs text-[#B6C2D9] mt-1">Copper alloy casting</div>
            </div>
          </div>
          {/* 联系我们 */}
          <div className="mb-8">
            <div className="text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'inherit' }}>让我们联系吧</div>
            <div className="text-[#B6C2D9] text-base mb-6 max-w-lg">
              Subscribe to the Easelink Newsletter for regular updates about the industry&apos;s leading technology.
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="rounded-full bg-[#232A5B] px-6 py-4 text-white placeholder:text-[#B6C2D9] outline-none border-none w-full max-w-md"
              />
              <ThemeButton
                theme="dark"
                text="Subscribe Send"
              />
            </form>
          </div>
          {/* 社交与语言 */}
          <div className="flex items-center gap-6 mt-8">
            <Image src="/icons/wechat.svg" alt="WeChat" width={32} height={32} className="h-8 w-8" />
            <Image src="/icons/xiaohongshu.svg" alt="小红书" width={32} height={32} className="h-8 w-8" />
            <div className="flex items-center gap-2 ml-8 text-[#B6C2D9] text-sm">
              <span className="text-white">EN</span>
              <span>CN</span>
            </div>
          </div>
        </div>
        {/* 右侧内容 */}
        <div className="flex-1 flex flex-col justify-between">
          {/* 菜单导航 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 mb-8">
            <div>
              <div className="text-white text-lg mb-3 hover:text-[#2A3B8F] transition-colors duration-300 cursor-pointer">Home</div>
              <div className="text-[#B6C2D9] text-base hover:text-white transition-colors duration-300 cursor-pointer">Technology</div>
            </div>
            <div>
              <div className="text-white text-lg mb-3 hover:text-[#2A3B8F] transition-colors duration-300 cursor-pointer">Company</div>
              <div className="text-[#B6C2D9] text-base hover:text-white transition-colors duration-300 cursor-pointer">Q&A</div>
            </div>
            <div>
              <div className="text-white text-lg mb-3 hover:text-[#2A3B8F] transition-colors duration-300 cursor-pointer">Products</div>
              <div className="text-[#B6C2D9] text-base hover:text-white transition-colors duration-300 cursor-pointer">Applications</div>
            </div>
            <div>
              <div className="text-white text-lg mb-3 hover:text-[#2A3B8F] transition-colors duration-300 cursor-pointer">Contact</div>
              <div className="text-[#B6C2D9] text-base hover:text-white transition-colors duration-300 cursor-pointer">News</div>
            </div>
          </div>
          {/* 联系方式 */}
          <div className="text-[#B6C2D9] text-base mb-8">
            <div>地址：浙江省嘉善县魏塘街道恒兴路179号</div>
            <div className="flex flex-wrap gap-x-8 mt-2">
              <div>电话：0573-84189302</div>
              <div>网址：www.jcbearing.com</div>
            </div>
            <div className="flex flex-wrap gap-x-8 mt-2">
              <div>传真：0573-84189301</div>
              <div>邮箱：info@jcbearing.com</div>
            </div>
          </div>
          {/* 版权信息 */}
          <div className="text-[#B6C2D9] text-sm">
            <p>&copy; 2024 嘉善精诚机械股份有限公司. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;