import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeroImg from "../assets/img/hero.jpg";
import BgImg from "../assets/img/trainers/matt.jpg";
import Header from "../Components/Header";
import Footer from '../Components/Footer';

const Register = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    membershipType: "",
    membershipPackage: "",
    payment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Registration Successful!");
  };
  return (
    <>
      <section
        className="min-h-[120vh] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HeroImg})`,
        }}
      >
        <Header activeLink={"#"} />
        <div className="flex justify-center items-center pt-36 pb-24 md:pt-44 md:pb-30">
          <form
            className="bg-white p-8 rounded shadow-lg w-full max-w-sm sm:max-w-md"
            onSubmit={handleSubmit}
          >
            <h4 className="text-2xl tracking-wide font-semibold mb-6">
              <span className="underline decoration-red-500">Reg</span>ister
            </h4>

            <div className="flex gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-red-600"
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none  focus:border-red-600"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none  focus:border-red-600"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="New Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-red-600"
                required
              />
            </div>

            <div className="flex gap-4 mb-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none  focus:border-red-600"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none  focus:border-red-600"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-black">Gender</label>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    checked={formData.gender === "Male"}
                    className="accent-red-500"
                  />
                  <span className="text-gray-700">Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    checked={formData.gender === "Female"}
                    className="accent-red-500"
                  />
                  <span className="text-gray-700">Female</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                    checked={formData.gender === "Other"}
                    className="accent-red-500"
                  />
                  <span className="text-gray-700">Other</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <select
                name="membershipType"
                value={formData.membershipType}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-red-600"
              >
                <option value="" disabled>
                  Select Membership Type
                </option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </div>

            <div className="mb-4">
              <select
                name="membershipPackage"
                value={formData.membershipPackage}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none  focus:border-red-600"
              >
                <option value="" disabled>
                  <p className="text-red-500">Select Membership Package</p>
                </option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-black">Payment Methods</label>
              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="Credit Card"
                    onChange={handleChange}
                    checked={formData.payment === "Credit Card"}
                    className="accent-red-500"
                  />
                  <span className="text-gray-700">Credit Card</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="wallet"
                    onChange={handleChange}
                    checked={formData.payment === "wallet"}
                    className="accent-red-500"
                  />
                  <span className="text-gray-700">Wallet</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="relative w-full mt-5 bg-red-600 rounded text-white border border-white px-4 py-2 z-20 group overflow-hidden"
            >
              <span className="ease absolute h-full top-0 left-[50%] right-[50%] bg-black z-10 transition-all duration-500 group-hover:left-[0] group-hover:right-[0]"></span>
              <span className="ease relative z-20 uppercase">Register</span>
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Register