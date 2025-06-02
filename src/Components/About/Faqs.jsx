import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const box = [
  {
    question: "What diet is important during and after workout?",
    answer:
      "During workouts, stay hydrated and, if needed, consume light carbs for energy. After workouts, eat protein to repair muscles and complex carbs to restore energy. Include healthy fats and keep drinking water. Aim to eat within 30-60 minutes post-workout for optimal recovery and results. ",
  },
  {
    question: "Should we need to do workout if our muscles is feeling sore?",
    answer:
      "If your muscles feel sore, it’s best to avoid intense workouts targeting those areas. Light activities like stretching or walking can help recovery by improving blood flow. Rest is important to prevent injury and let muscles heal. Always listen to your body and avoid pushing through sharp or severe pain.",
  },
  {
    question: "How many days in a week should I need to work out?",
    answer:
      "For most people, working out 3 to 5 days a week is ideal. This allows enough time for exercise while giving your body rest and recovery. Beginners can start with 3 days, focusing on full-body workouts. More experienced individuals might do 4-5 days with split routines targeting different muscle groups. Rest days are important to prevent injury and help muscles grow. Ultimately, the best routine depends on your goals, fitness level, and schedule. Would you like a sample weekly workout plan",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const handlebutton = (index) => {
    // Toggle openIndex if clicked again, else set the new index
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-[90vh] py-12 px-4 bg-black/20">
      <h1 className="h1 text-center">FAQs</h1>
      <div className="max-w-[92%] flex flex-col mx-auto gap-10 mt-16 ">
        {box.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col p-6 pb-4 justify-center"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-semibold mr-3">{item.question}</h2>
              <IoIosArrowDropdownCircle
                onClick={() => handlebutton(index)} // Pass the question's index
                className={`cursor-pointer transition-transform ease-in-out duration-200 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                color="red"
                size={30}
              />
            </div>
            <p
              className={`mt-4 text-gray-700 text-base md:text-lg max-w-[85%] transition-all ease-in-out duration-300 ${
                openIndex === index
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
