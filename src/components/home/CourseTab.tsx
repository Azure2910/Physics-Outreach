"use client";

import CourseCard from "@/components/courses/course-card";
import React from "react";
import { Course, CourseLabel } from "@/api/types/course.type";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Routes } from "@/lib/routes/routes";

interface CourseTabProps {
  courses?: Course[];
  isLoading?: boolean;
  error?: any;
  onCourseClick?: (courseId: string) => void;
  onLabelChange?: (label: string | null) => void;
  activeLabel?: string | null;
}

const listTab = [
  {
    id: 1,
    name: "Tất cả",
    numberLesson: 0, // Will be updated dynamically
    label: null,
  },
  {
    id: 2,
    name: "Nổi bật",
    numberLesson: 0,
    label: CourseLabel.FEATURED,
  },
  {
    id: 3,
    name: "Phổ biến",
    numberLesson: 0,
    label: CourseLabel.BEST_SELLER,
  },
  {
    id: 4,
    name: "Xu hướng",
    numberLesson: 0,
    label: CourseLabel.HOT,
  },
  {
    id: 5,
    name: "Mới nhất",
    numberLesson: 0,
    label: CourseLabel.NEW,
  },
];

export function CourseTab({
  courses = [],
  isLoading = false,
  error = null,
  onCourseClick,
  onLabelChange,
  activeLabel,
}: CourseTabProps) {
  const router = useRouter();
  // Get active tab ID based on activeLabel
  const getActiveTabId = () => {
    const matchingTab = listTab.find((tab) => tab.label === activeLabel);
    return matchingTab?.id || 1; // Default to "Tất cả" if no match
  };

  const handleNavigateToCourse = () => {
    router.push(Routes.courses);
  };

  // Update tabs with actual course counts
  const updatedTabs = listTab.map((tab) => {
    if (tab.id === 1) {
      // "Tất cả" tab shows total courses available
      return { ...tab, numberLesson: courses.length };
    } else {
      // Other tabs show estimated counts (you can make these dynamic based on actual filters if needed)
      return {
        ...tab,
        numberLesson: Math.floor(courses.length * 0.7), // Estimated 70% for other categories
      };
    }
  });

  const handleTabClick = (tab: any) => {
    onLabelChange?.(tab.label);
  };

  const handleCourseClick = (courseId: string) => {
    if (onCourseClick) {
      onCourseClick(courseId);
    }
  };

  // Get courses to display (limit to 8 for preview)
  const displayCourses = courses.slice(0, 8);

  return (
    <section className="bg-white mb-20 md:mb-[120px]">
      <div className="w-full mx-auto px-5 md:px-10 max-w-[1280px]">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-[#FF7F36] text-base md:text-xl mb-3">
            Khóa học
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold  mb-4">
            Khóa Học Được Yêu Thích Nhất
          </h2>
          <p className="text-[#637381] max-w-2xl mx-auto text-base md:text-xl">
            Hành trình chinh phục vật lý của bạn sẽ bắt đầu từ đây. Chúng mình
            có các khóa học được thiết kế riêng cho từng độ tuổi, từ cơ bản đến
            nâng cao.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {updatedTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`cursor-pointer relative flex flex-col items-center justify-center min-w-[120px] px-8 py-4 rounded-full transition-all ${
                getActiveTabId() === tab.id
                  ? "bg-[#FF7F36] text-white"
                  : "text-[#FF7F36] bg-white hover:bg-[#FF7F36] hover:text-white shadow-[0px_12px_24px_rgba(145,158,171,0.12),0px_0px_2px_rgba(145,158,171,0.20)]"
              }`}
            >
              {/*<span className="text-[10px] right-2.5 top-2 absolute text-[#919EABCC]">*/}
              {/*  {tab.numberLesson}*/}
              {/*</span>*/}
              <span
                className={`text-sm font-medium ${getActiveTabId() === tab.id ? "text-white" : "text-[#637381]"}`}
              >
                {tab.name}
              </span>
            </button>
          ))}
        </div>

        {/* Courses Display */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading ? (
            <div className="col-span-4 flex justify-center items-center py-20">
              <Loader2 className="animate-spin text-gray-400" size={32} />
              <span className="ml-2 text-gray-500">Đang tải khóa học...</span>
            </div>
          ) : error ? (
            <div className="col-span-4 flex justify-center items-center py-20">
              <div className="text-center">
                <p className="text-red-500 mb-2">
                  Có lỗi xảy ra khi tải dữ liệu
                </p>
                <p className="text-gray-500 text-sm">
                  {error?.message || "Vui lòng thử lại sau"}
                </p>
              </div>
            </div>
          ) : displayCourses.length > 0 ? (
            displayCourses.map((course) => (
              <div
                key={course.id}
                className="cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => handleCourseClick(course.slug)}
              >
                <CourseCard
                  slug={course.slug}
                  badge={course.label}
                  title={course.title}
                  imageUrl={course.thumbnail}
                  category="Khóa học"
                  courseName={course.title}
                  instructor={`Giảng viên: ${course?.owner.fullName}`}
                  lessonCount={course.totalLesson}
                  studentCount={course.enrollmentCnt}
                  currentPrice={
                    course.pricing.discounted
                      ? course.pricing.discounted.toLocaleString()
                      : course.pricing.regular.toLocaleString()
                  }
                  originalPrice={
                    course.pricing.discounted
                      ? course.pricing.regular.toLocaleString()
                      : ""
                  }
                />
              </div>
            ))
          ) : (
            <div className="col-span-4 text-center py-20">
              <p className="text-gray-500">Chưa có khóa học nào</p>
            </div>
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleNavigateToCourse}
            size="lg"
            className="text-white rounded-full"
          >
            Xem tất cả
          </Button>
        </div>
      </div>
    </section>
  );
}
