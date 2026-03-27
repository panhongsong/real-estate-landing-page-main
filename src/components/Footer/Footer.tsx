'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1033] text-white pt-16 pb-8 relative overflow-hidden font-sans">
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
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 flex flex-col md:flex-row gap-12">
        {/* 左侧内容 */}
        <div className="flex-1 min-w-[320px] flex flex-col justify-between">
          {/* LOGO */}
          <div className="flex items-center mb-8">
            <img src="/logo-1.png" alt="JCJX LOGO" className="h-12 w-auto mr-4" />
            <div>
              <div className="text-xl font-bold tracking-wider leading-tight">嘉善精诚机械股份有限公司</div>
              <div className="text-xs text-[#B6C2D9] mt-1">Copper alloy casting</div>
            </div>
          </div>
          {/* 联系我们 */}
          <div className="mb-8">
            <div className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'inherit' }}>让我们联系吧</div>
            <div className="text-[#B6C2D9] text-base mb-6 max-w-lg">
              Subscribe to the Easelink Newsletter for regular updates about the industrie’s leading technology.
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="rounded-full bg-[#232A5B] px-6 py-4 text-white placeholder:text-[#B6C2D9] outline-none border-none w-full max-w-md"
              />
              <button
                type="submit"
                className="flex items-center justify-center border border-white rounded-full px-6 py-2 w-fit text-white hover:bg-white hover:text-[#0B1033] transition"
              >
                Subscribe Send
                <svg className="ml-2" width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
          {/* 社交与语言 */}
          <div className="flex items-center gap-6 mt-8">
            <img src="/icons/wechat.svg" alt="WeChat" className="h-8 w-8" />
            <img src="/icons/xiaohongshu.svg" alt="小红书" className="h-8 w-8" />
            <div className="flex items-center gap-2 ml-8 text-[#B6C2D9] text-sm">
              <span className="underline text-white">EN</span>
              <span>CN</span>
            </div>
          </div>
        </div>
        {/* 右侧内容 */}
        <div className="flex-1 flex flex-col justify-between">
          {/* 菜单导航 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 mb-8">
            <div>
              <div className="text-white text-lg mb-3">Home</div>
              <div className="text-[#B6C2D9] text-base">Technology</div>
            </div>
            <div>
              <div className="text-white text-lg mb-3">Company</div>
              <div className="text-[#B6C2D9] text-base">Q&A</div>
            </div>
            <div>
              <div className="text-white text-lg mb-3">Products</div>
              <div className="text-[#B6C2D9] text-base">Applications</div>
            </div>
            <div>
              <div className="text-white text-lg mb-3">Contact</div>
              <div className="text-[#B6C2D9] text-base">News</div>
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
          <div className="flex flex-col md:flex-row justify-between items-center text-[#B6C2D9] text-sm gap-2 mt-8">
            <div>© {new Date().getFullYear()} Jingcheng Machinery</div>
            <div>浙备案号</div>
            <div>开发&设计：朗动设计</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;