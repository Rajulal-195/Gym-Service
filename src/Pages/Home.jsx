import React from "react";
import Hero from "../Components/Hero";
import AboutSection from "../Components/About/AboutSection";
import Classes from "../Components/Classes";
import TrainerMeetSection from "../Components/Trainer/TrainerMeetSection";
import Membership from "../Components/Membership";
import BmiCalc from "../Components/BmiCalc";
import BlogSection from "../Components/Blog/BlogSection";
import Testimonials from "../Components/Testimonials/Testimonials";
import Footer from "../Components/Footer";
import Brands from "../Components/Brands";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <ToastContainer />
      <Hero />
      <AboutSection heading={"About Us"} />
      <Classes />
      <TrainerMeetSection />
      <Membership />
      <BmiCalc />
      <Testimonials />
      <BlogSection />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
