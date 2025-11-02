import React from "react";
import "./index.css";
import { Banner } from "@/components/home/Banner";
import BenefitsSection from "@/components/home/BenefitsSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import CourseTabHomeComponent from "@/components/home/CourseTabHome";
import HomepageFeedback from "@/components/home/HomepageFeedback";
import IntroSection from "@/components/home/IntroSection";

function HomePage() {
  return (
    <div>
      <Banner />
      <IntroSection />
      <BenefitsSection />
      <CourseTabHomeComponent />
      <HomepageFeedback />
      <CallToActionSection />
    </div>
  );
}

export default HomePage;
