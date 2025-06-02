import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TestimonialComponent from "../Components/Testimonials/TestimonialComponent";
import CustomHero from "../Components/CustomHero";

const TestimonialPage = () => {
  return (
    <div className=" bg-slate-300">
      <CustomHero link={"testimonials"} text={"Testimonials"} />
      <TestimonialComponent />
      <Footer />
    </div>
  );
};

export default TestimonialPage;
