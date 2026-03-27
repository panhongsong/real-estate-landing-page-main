import Image from "next/image";

export default function QulityPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-16">
      <section className="max-w-6xl mx-auto px-4 pt-16">
        <h1 className="text-4xl font-bold text-[#1e293b] mb-4">天润轴承 · 品质保障</h1>
        <p className="text-lg text-[#64748b] mb-10 max-w-2xl">
          浙江天润轴承有限公司专注于高品质轴承的研发与制造，严格把控每一道工序，确保产品性能与耐用性。我们以客户为中心，持续创新，致力于为全球客户提供优质的轴承解决方案。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/images/image-4.jpg"
              alt="品质保障"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="inline-block w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold text-xl">1</span>
              <div>
                <h2 className="text-xl font-semibold text-[#1e293b] mb-1">严格原材料筛选</h2>
                <p className="text-[#64748b]">精选优质钢材，确保轴承基础性能优越。</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-block w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold text-xl">2</span>
              <div>
                <h2 className="text-xl font-semibold text-[#1e293b] mb-1">先进生产工艺</h2>
                <p className="text-[#64748b]">采用自动化生产线，精密加工，提升产品一致性。</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-block w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold text-xl">3</span>
              <div>
                <h2 className="text-xl font-semibold text-[#1e293b] mb-1">全流程质量检测</h2>
                <p className="text-[#64748b]">多道检测工序，层层把关，确保每一件产品合格。</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-block w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold text-xl">4</span>
              <div>
                <h2 className="text-xl font-semibold text-[#1e293b] mb-1">完善售后服务</h2>
                <p className="text-[#64748b]">专业团队响应客户需求，提供全方位技术支持。</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
