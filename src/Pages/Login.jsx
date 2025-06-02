import React from 'react'
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import HeroImg from "../assets/img/hero.jpg"
import BgImg from "../assets/img/trainers/matt.jpg"
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Login = () => {
  return (
    <>
    <section
      className="min-h-screen bg-center bg-cover bg-no-repeat"
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HeroImg})`,
      }}
    >
      <Header activeLink={"#"}/>
      <div className="flex justify-center items-center pt-36 pb-24 md:pt-44 md:pb-20">
        <div className="bg-white flex flex-col md:flex-row md:min-w-[55%] min-h-[80vh] md:min-h-[60vh]">
          <div className="px-6 py-10 flex-1 flex flex-col justify-center">
            <h4 className="text-2xl tracking-wide font-semibold mb-1">
              <span className="underline decoration-red-500">Lo</span>gin
            </h4>
            <form action="#" className="">
              <div className="flex flex-col gap-3 py-6">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3 border-b-2 border-opacity-50 border-gray-500 pb-2">
                    <MdEmail color="red" />
                    <input
                      className="outline-none"
                      type="text"
                      placeholder="Enter Your Email"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-3 border-b-2 border-opacity-50 border-gray-500 pb-2">
                    <FaLock color="red" />
                    <input
                      className="outline-none"
                      type="password"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>
                </div>
                <div className="mt-[-4px] text-red-500">
                  <a href="#">Forgot Password?</a>
                </div>
                <button className="relative mt-5 bg-red-600 rounded text-white border border-white px-4 py-2 z-20 group overflow-hidden">
                  <span className="ease absolute h-full top-0 left-[50%] right-[50%] bg-black z-10 transition-all duration-500 group-hover:left-[0] group-hover:right-[0]"></span>
                  <span className="ease relative z-20 uppercase">Login</span>
                </button>
                <p className="text-center">
                  Don't have an account?{" "}
                  <span className="text-red-500">
                    <Link
                      to="/register"
                      onClick={() => handleLinkClick("register")}
                    >
                      Register now
                    </Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div
            className="flex-1 px-6 py-10 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            style={{
              backgroundImage: `linear-gradient(to top right, rgba(80, 0, 100, 1), rgba(100, 0, 25, 0.2)), url(${BgImg})`,
            }}
          >
            <h2 className="text-[27px] tracking-wider text-center font-bold text-white">
              Dream, Persevere, Achieve
            </h2>
            <p className="text-base tracking-wide text-center font-semibold text-white">
              Let's train together
            </p>
          </div>
        </div>
      </div>
    </section>
      <Footer />
      </>
  );
}

export default Login