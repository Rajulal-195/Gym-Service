import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import CustomButton from "../CustomButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      setResult("");
      return;
    }

    formData.append("access_key", "356192a0-0d6d-4f62-87e7-b31924a75fe4");

    try {
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
        toast.error(data.message || "An error occurred. Please try again.");
        setResult("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please try again.");
      setResult("");
    }
  };

  return (
    <div className="container w-full min-h-full ">
      <ToastContainer />
      <div className=" grid grid-col-1 sm:grid-cols-2 gap-8 py-10 px-10">
        <div className="">
          {/* Get in Touch */}
          <div className=" text-4xl md:text-5xl font-bold text-center p-5">
            <h2 className="">Get in Touch </h2>
          </div>
          <div className="">
            {/* paragraph div  */}
            <div>
              <p className="">
                We are consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut .
              </p>
            </div>

            {/* Phone  */}
            <div className="flex items-center py-5 ">
              {/* importing icon here */}
              <FaPhone className="text-4xl mr-3 p-1  cursor-pointer hover:text-red-600" />
              <ul>
                <li>+91 894 697 3100</li>
              </ul>
            </div>
            {/* mail */}
            <div className="flex items-center">
              {/* importing icon here */}
              <FaEnvelope className="text-4xl mr-3 p-1  cursor-pointer hover:text-red-600 " />
              <ul>
                <li>gupta.deepanshu082@gmail.com</li>
                <li>info@FitPhysique.com</li>
              </ul>
            </div>
            {/* Location */}
            <div className="flex items-center py-5">
              {/* importing icon here */}
              <FaMapMarkerAlt className="text-4xl mr-3 p-1 cursor-pointer hover:text-red-600" />
              <ul>
                <li>80/84 Patel Marg Crossing Jaipur Rajasthan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Get Appointment */}
        <div className="">
          <div className=" text-4xl md:text-5xl text-center font-bold p-5">
            <h2 className="">Get Appointment</h2>
          </div>
          <form onSubmit={onSubmit}>
            <div className=" grid sm:grid-cols-2 place-items-center gap-5 w-[100%] ">
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="text-lg w-[100%] border-2 p-3"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Your E-mail Address"
                className="text-lg w-[100%] border-2 p-3"
                required
              />
            </div>
            <textarea
              placeholder="Your message"
              name="message"
              className="w-[100%] h-[150px] border-2 my-5 p-4 text-xl"
              required
            ></textarea>
            {/* button  */}
            <div className=" flex flex-col items-center">
              <p>*We protect your privacy</p>
              <CustomButton
                text={`${result ? result : "Send"}`}
                containerStyles="w-[196px] h-[62px] bg-red-300 mt-4 "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
