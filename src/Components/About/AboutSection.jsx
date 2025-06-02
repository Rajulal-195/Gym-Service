import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";

const Cards = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "At Fit Physique, your goals are in expert hands. Our award-winning trainers bring years of experience, proven results, and national-level recognition in fitness coaching. Whether you're a beginner or an athlete, you'll get personalized guidance, motivation, and safe techniques to transform your body — faster and smarter than ever!",
  },

  {
    icon: <IoIosPricetags />,
    title: "Affordable Price",
    subtitle:
      "At Fit Physique, we offer high-quality fitness at prices everyone can afford. With flexible plans, zero hidden fees, and discounts for students and couples, getting fit has never been this budget-friendly. Join today and enjoy expert guidance, modern equipment, and a supportive community — all within your budget"

,
  },

  {
    icon: <FaDumbbell />,
    title: "Modern Equipments",
    subtitle:
      "At Fit Physique, we’re equipped with the latest, state-of-the-art fitness machines to power your workout. From advanced cardio stations to smart strength-training gear, our modern equipment ensures safety, efficiency, and results. Train smarter, not harder — with technology that keeps up with your goals and supports every move!",
  },
];

const AboutSection = ({ heading }) => {
  return (
    <section className=" bg-gray-50 pt-8 pb-14 lg:pt-16 lg:pb-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h1 className="h1 text-center">{heading}</h1>
          <p className="max-w-[700px] mx-5 text-center text-[16px] md:text-[18px]">
            <ul>
              <li>
                At Fit Physique, we’re more than just a gym — we’re your fitness family. Here’s why hundreds choose us every day:<br />

              </li>

            </ul>


          </p>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap gap-8 justify-center mt-14 ">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="max-w-[430px] bg-white flex flex-col justify-center items-center gap-4 border shadow-lg rounded-md px-8 py-12 text-center"
            >
              <div className="text-4xl bg-black text-white w-[80px] h-[80px] rounded-full flex justify-center items-center mx-auto">
                {item.icon}
              </div>
              <h2 className="h2 uppercase text-red-700">{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
