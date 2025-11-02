"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Row, Col } from "antd";
import React from "react";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes/routes";
import { ArrowRight2, Play } from "iconsax-react";

export function Banner() {
  const router = useRouter();

  const handleNavigateToCourse = () => {
    router.push(Routes.courses);
  };

  const handleNavigateToLogin = () => {
    router.push(Routes.login);
  };

  return (
    <section className="bg-[#FDF9F2] pt-20 md:pt-50 pb-20 md:pb-40">
      <div className="w-full mx-auto px-5 md:px-10 max-w-[1536px]">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12} className="space-y-12">
            <h1 className="font-bold text-4xl md:text-7xl leading-tight text-center md:text-left md:max-w-165">
              Vật Lý Diệu Kỳ - <br />
              <span className="relative inline-block">
                <span className="relative z-10">Khám Phá</span>
                <svg
                  className="absolute top-[13px] md:right-[-30px] md:left-[-30px] bottom-[-10px] hidden md:block"
                  viewBox="0 0 410 85"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M205 2C261.515 2 312.623 6.75041 349.551 14.4062C368.031 18.2376 382.855 22.7755 393.01 27.7529C398.091 30.2436 401.9 32.7949 404.412 35.3398C406.918 37.8784 408 40.2669 408 42.5C408 44.7331 406.918 47.1216 404.412 49.6602C401.9 52.2051 398.091 54.7564 393.01 57.2471C382.855 62.2245 368.031 66.7624 349.551 70.5938C312.623 78.2496 261.515 83 205 83C148.485 83 97.3774 78.2496 60.4492 70.5938C41.9687 66.7624 27.1451 62.2245 16.9902 57.2471C11.9087 54.7564 8.09986 52.2051 5.58789 49.6602C3.08229 47.1216 2 44.7331 2 42.5C2 40.2669 3.08229 37.8784 5.58789 35.3398C8.09986 32.7949 11.9087 30.2436 16.9902 27.7529C27.1451 22.7755 41.9687 18.2376 60.4492 14.4062C97.3774 6.75041 148.485 2 205 2Z"
                    stroke="#FF9800"
                    stroke-width="4"
                  />
                </svg>
              </span>{" "}
              Thế Giới Quanh Ta
            </h1>

            <div className="max-w-105 h-[1px] bg-[#212B36] mx-auto lg:mx-0"></div>

            <div className="grid grid-cols-2 gap-8 max-w-105">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <Image
                  src="/images/home/layers.png"
                  alt="Xây dựng tương lai"
                  width={32}
                  height={32}
                  className="mb-5"
                />
                <div className="font-semibold mb-4">Xây dựng tương lai</div>
                <p className="text-sm">
                  Học vật lý một cách mới lạ, hấp dẫn, dễ hiểu và thực tế.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <Image
                  src="/images/home/book.png"
                  alt="Học dễ dàng"
                  width={32}
                  height={32}
                  className="mb-5"
                />
                <div className="font-semibold mb-4">Học dễ dàng</div>
                <p className="text-sm">
                  Nắm vững kiến thức một cách dễ dàng và hiệu quả.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
              <Button
                onClick={handleNavigateToLogin}
                className="rounded-full text-white text-base font-semibold transition-all"
              >
                Bắt đầu
                <ArrowRight2 size="24" color="#FFFFFF" />
              </Button>
              <Button
                onClick={handleNavigateToCourse}
                className="rounded-full bg-[#919EAB14] text-base font-semibold hover:bg-[#919EAB29] transition-all"
              >
                Khóa học
                <Play size="24" color="#292D32" />
              </Button>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div className="flex justify-center md:justify-end">
              <div className="w-full md:max-w-[570px] aspect-[570/651] relative rounded-[24px] overflow-hidden max-h-[400px] md:max-h-none">
                <Image
                  src="/images/home/banner-physics.jpg"
                  alt="Banner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
