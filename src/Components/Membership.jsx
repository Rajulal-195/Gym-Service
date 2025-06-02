import React from 'react';
import { useNavigate } from 'react-router-dom';
import BgImg from '../assets/img/membership/bg.jpg';
import { MdCheck, MdClose } from 'react-icons/md';
import CustomButton from './CustomButton';

const Cards = [
  {
    title: "Standard",
    price: "2,599",
    benefits: [
      { icon: MdCheck, text: "Includes Membership" },
      { icon: MdCheck, text: "Access To All Gym Facilities" },
      { icon: MdClose, text: "Diet Plan Included" },
      { icon: MdCheck, text: "Health and Fitness Tips" },
      { icon: MdClose, text: "Monday-Friday Gym Access" },
      { icon: MdCheck, text: "Full Access To Everything" },
      { icon: MdClose, text: "No Additional Amenities" },
    ],
  },
  {
    title: "Professional",
    price: "3,900",
    benefits: [
      { icon: MdCheck, text: "Includes Membership" },
      { icon: MdCheck, text: "Access To All Gym Facilities" },
      { icon: MdClose, text: "Diet Plan Included" },
      { icon: MdCheck, text: "Health and Fitness Tips" },
      { icon: MdCheck, text: "Monday-Friday Gym Access" },
      { icon: MdCheck, text: "Full Access To Everything" },
      { icon: MdClose, text: "No Additional Amenities" },
    ],
  },
  {
    title: "Ultimate",
    price: "4,899",
    benefits: [
      { icon: MdCheck, text: "Includes Membership" },
      { icon: MdCheck, text: "Access To All Gym Facilities" },
      { icon: MdCheck, text: "Diet Plan Included" },
      { icon: MdCheck, text: "Health and Fitness Tips" },
      { icon: MdCheck, text: "Monday-Friday Gym Access" },
      { icon: MdCheck, text: "Full Access To Everything" },
      { icon: MdCheck, text: "No Additional Amenities" },
    ],
  }
];

const Membership = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };

  return (
    <section
      className="min-h-screen bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${BgImg})`,
      }}
    >
      <div className="my-8">
        <h1 className="h1 text-center text-white">MEMBERSHIP</h1>

        <div className="flex flex-wrap justify-center items-center gap-20 mt-9">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="bg-black/80 hover:bg-gray-700 transition-all duration-200 text-white px-20 md:px-16 py-9 rounded-lg shadow-lg"
            >
              <h2 className="h3 uppercase">{item.title}</h2>
              <ul className="mt-4 flex flex-col gap-5 mb-7">
                {item.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <benefit.icon
                      className={
                        benefit.icon === MdCheck
                          ? "text-green-500 text-lg"
                          : "text-red-500 text-lg"
                      }
                    />
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-red-600 mb-8 flex gap-1 items-center">
                <sup className="text-3xl">Rs.</sup>
                <strong className="text-5xl">{item.price}</strong>
                <em className="self-end text-2xl">/month</em>
              </p>
              <CustomButton
                onClick={handleClick}
                containerStyles="px-6 py-3 bg-black"
                text="Buy Now"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
