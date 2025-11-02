"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes/routes";

export default function CallToActionSection() {
  const router = useRouter();

  const handleNavigateToCourse = () => {
    router.push(Routes.courses);
  };

  return (
    <section className="w-full mx-auto px-5 md:px-10 max-w-[1280px] relative py-30 my-20 flex items-center justify-center text-center">
      <Image
        src="/images/home/cta_bg.png"
        alt="Background CTA"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Bắt Đầu Hành Trình Khám Phá Vũ Trụ Vật Lý
        </h2>
        <div className="flex justify-center mb-1.5">
          <Image
            src="/images/home/cta_line.png"
            alt="Decorative line"
            width={300}
            height={10}
            className="object-contain"
          />
        </div>
        <p className="text-[#637381] text-base md:text-xl mb-8">
          Nhanh tay đăng ký để khám phá những điều thú vị mà vật lý mang lại!
        </p>
        <Button
          onClick={handleNavigateToCourse}
          className="rounded-full px-12 py-3 text-white font-semibold transition"
        >
          Bắt đầu ngay
        </Button>
      </div>
    </section>
  );
}
