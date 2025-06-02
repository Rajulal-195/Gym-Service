import React from "react";
import { useNavigate } from "react-router-dom";
import BgImg from "../assets/img/blog/post3.jpg";
import Logo from "../assets/img/logo.png";
import Img1 from "../assets/img/trainers/david.jpg";
import Img2 from "../assets/img/trainers/rosy.jpg";
import Img3 from "../assets/img/trainers/matt.jpg";
import Img4 from "../assets/img/trainers/sofia.jpg";
import Img5 from "../assets/img/testimonial/lucy.jpg";
import Img6 from "../assets/img/testimonial/maria.jpg";
import Img7 from "../assets/img/testimonial/michael.jpg";
import Img8 from "../assets/img/blog/post1.jpg";
import Img9 from "../assets/img/blog/post2.jpg";
import {
  FaEnvelope,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import CustomButton from "../Components/CustomButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoundButton from "./RoundButton";

const Cards = [
  {
    date: "March 10, 2024",
    title: "Maintain a Perfect Structure After Workout",
  },
  {
    date: "April 18, 2024",
    title: "Maintain a Perfect Structure After Workout",
  },
  {
    date: "November 1, 2024",
    title: "Maintain a Perfect Structure After Workout",
  },
];

const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "356192a0-0d6d-4f62-87e7-b31924a75fe4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult();
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/gallery");
  };

  return (
    <footer className="relative min-h-[100vh] bg-black overflow-hidden">
      {/* BackgroundImage */}
      <div
        className="absolute right-8 top-2 w-[70%] md:w-[30%] h-[35%] md:h-[90%] bg-cover bg-center opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(
              ellipse at center,
              rgba(0, 0, 0, 0.2) 50%,   /* Transparent center */
              rgba(0, 0, 0, 0.7) 75%, /* Fading starts */
              rgba(0, 0, 0, 0.8) 100%   /* Fully black edges */
            ),
            linear-gradient(
              to left,
              rgba(0, 0, 0, 0.8) 1%,   /* Fully black on the left */
              rgba(0, 0, 0, 0) 30%    /* Fade into transparent */
            ),
            linear-gradient(
              to right,
              rgba(0, 0, 0, 0.8) 1%,   /* Fully black on the right */
              rgba(0, 0, 0, 0) 30%    /* Fade into transparent */
            ),
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.2) 5%,   /* Fully black on the top */
              rgba(0, 0, 0, 0) 30%    /* Fade into transparent */
            ),
            url(${BgImg})`,
        }}
      ></div>

      {/* footer content */}

      <div className="relative md:max-w-[80%] mx-auto my-16">
        <div className="text-white grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Info */}
          <div className="flex flex-col gap-5 px-6 md:p-0">
            <img src={Logo} alt="" className="w-[100px]" />
            <p className="max-w-sm">
              Fit Physique is for build and fitness body <br/>
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-xl text-red-500" />
                <span>80/84 Patel Marg Crossing Jaipur Rajasthan </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-xl text-red-500" />
                <span>+91 894 697 3100</span>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-xl text-red-500" />
                <span>gupta.deepanshu082@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div className="flex flex-col gap-5 px-6 md:p-0">
            <h3 className="h3 uppercase text-red-500">Recent Blog Post</h3>
            {Cards.map((item, index) => (
              <div key={index} className="border-b border-gray-400 pb-3">
                <h2 className="h4 uppercase">{item.title}</h2>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="flex flex-col gap-5 px-6 md:p-0">
            <h3 onClick={handleClick} className="h3 uppercase text-red-500 cursor-pointer">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ">
              <img src={Img1} alt="" className="w-full h-full" />
              <img src={Img2} alt="" className="w-full h-full" />
              <img src={Img3} alt="" className="w-full h-full" />
              <img src={Img4} alt="" className="w-full h-full" />
              <img src={Img5} alt="" className="w-full h-full" />
              <img src={Img6} alt="" className="w-full h-full" />
              <img src={Img7} alt="" className="w-full h-full" />
              <img src={Img8} alt="" className="w-full h-full" />
              <img src={Img9} alt="" className="w-full h-full" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5 px-6 md:p-0">
            <h3 className="h3 uppercase text-red-500">Newsletter</h3>
            <p className="max-w-sm">
              By subscribing us you will get discount offers and our tips for
              your fitness for good results.
            </p>

            <form onSubmit={onSubmit} action="">
              <div className="flex items-center gap-2 max-w-[500px] lg:w-full">
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email Address"
                  className="md:flex-1 p-2 w-[75%] lg:w-full border border-gray-300 text-black overflow-hidden"
                  required
                />

                <CustomButton
                  containerStyles={"px-4 py-2 w-[20%] lg:w-auto"}
                  text={`${result ? result : "Send"}`}
                />
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-white border-t border-white/20 mt-20 mx-5 py-12">
          <p className="text-gray-400">&copy; Copyright 2024 ANYTIME FITNESS. </p>
          <div className="flex gap-6 md:gap-10">
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
    </footer>
  );
};

export default Footer;
