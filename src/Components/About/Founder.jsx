import React from "react";
import FounderBg from "/src/assets/img/founder.webp";
import RoundButton from "../RoundButton";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Founder = () => {
  return (
    <section className="min-h-[90vh] bg-black flex justify-center items-center px-4 py-12">
      <div className="max-w-[90%] grid grid-cols-1 md:grid-cols-2 gap-20">
        <img src={FounderBg} alt="" className="w-full" />
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="h1 uppercase text-white mb-4 text-center">
            Meet Our Founder
          </h1>
          <p className="text-white/50 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h4 className="text-lg uppercase text-red-500">-Harold Smith</h4>
          <div className="flex justify-center items-center gap-5 mt-6">
            <RoundButton
              divStyles="bg-white text-red-500"
              spanStyles="bg-blue-700"
              text={<FaFacebookF size={20} />}
            />
            <RoundButton
              divStyles="bg-white text-red-500"
              spanStyles="bg-blue-400"
              text={<FaTwitter size={20} />}
            />
            <RoundButton
              divStyles="bg-white text-red-500"
              spanStyles="bg-red-700"
              text={<FaYoutube size={20} />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
