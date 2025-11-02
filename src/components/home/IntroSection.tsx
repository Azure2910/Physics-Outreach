"use client";

import Image from "next/image";

export default function PhysicsIntroSection() {
  return (
    <section className="bg-white mt-20 lg:mt-40 m-10 md:mb-20">
      <div className="w-full mx-auto px-5 md:px-10 max-w-[1280px] grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start w-full">
          <div className="relative w-full md:w-[436px] aspect-[436/436] max-h-[436px]">
            <Image
              src="/images/home/physics-intro.png"
              alt="Học vật lý không còn áp lực"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-base font-semibold text-[#FF7F36] uppercase mb-6">
            Giới thiệu
          </p>
          <h2 className="text-4xl md:text5xl font-semibold mb-8">
            Học Vật Lý Không Còn Là Áp Lực
          </h2>
          <p className="text-[#637381]">
            Bạn có biết tại sao cầu vồng lại có nhiều màu? Tại sao máy bay lại
            bay được trên bầu trời? Đồ vật lại nổi được trên mặt nước? Tất cả
            đều là những câu hỏi hấp dẫn của vật lý. Vật lý diệu kỳ không chỉ
            giúp các bạn tìm ra câu trả lời cho những câu hỏi đó, mà còn giúp
            các bạn khám phá thế giới xung quanh một cách thú vị hơn.
          </p>
        </div>
      </div>
    </section>
  );
}
