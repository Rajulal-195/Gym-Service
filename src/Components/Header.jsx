import React, { useState } from "react";
import { useEffect } from "react";
import Logo from "../assets/img/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = ({ activeLink: initialActiveLink }) => {
  const [activeLink, setActiveLink] = useState(initialActiveLink || "home");
  const [menuNav, setMenuNav] = useState(false);

  useEffect(() => {
    // Update the state if the `initialActiveLink` changes dynamically
    if (initialActiveLink) {
      setActiveLink(initialActiveLink);
    }
  }, [initialActiveLink]);

  const handleLinkClick = (link) => {
    if (activeLink !== link) {
      setActiveLink(link);
    }
  };

  const handleMenuNav = () => {
    setMenuNav(!menuNav);
  };

  return (
    <nav>
      <div className="fixed z-[1000] bg-opacity-70 backdrop-blur-md bg-black text-white w-full flex justify-around items-center py-4 px-6 md:px-20 lg:px-30">
        {/* Logo Section */}
        <div className="z-40">
          <img className="min-w-[85px]" src={Logo} alt="" />
        </div>

        {/* Navigation links section */}
        <div className="uppercase md:text-[14px] lg:text-[16px] mx-7 lg:mx-12">
          <ul className="hidden md:flex gap:3 lg:gap-7 md:gap-4 ">
            <li>
              <Link to="/" onClick={() => handleLinkClick("home")}>
                <span
                  className={`${
                    activeLink === "home"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => handleLinkClick("about")}>
                <span
                  className={`${
                    activeLink === "about"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link to="/trainer" onClick={() => handleLinkClick("trainer")}>
                <span
                  className={`${
                    activeLink === "trainer"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Trainer
                </span>
              </Link>
            </li>
            <li>
              <Link to="/prices" onClick={() => handleLinkClick("prices")}>
                <span
                  className={`${
                    activeLink === "prices"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Prices
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                onClick={() => handleLinkClick("testimonials")}
              >
                <span
                  className={`${
                    activeLink === "testimonials"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Testimonials
                </span>
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => handleLinkClick("blog")}>
                <span
                  className={`${
                    activeLink === "blog"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => handleLinkClick("contact")}>
                <span
                  className={`${
                    activeLink === "contact"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Login buttons */}
        <div className="flex gap-2 Lg:gap-6 md:gap-3 md:text-[16px] lg:text-[18px] font-semibold">
          <button className="text-red-600">
            <Link to="/login" onClick={() => handleLinkClick("login")}>
              LOGIN
            </Link>
          </button>
          <button>
            <Link to="/register" onClick={() => handleLinkClick("register")}>
              REGISTER
            </Link>
          </button>
        </div>
        <div onClick={() => handleMenuNav()} className="block md:hidden z-30">
          {menuNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Screen */}
        <div
          className={
            menuNav
              ? "fixed left-0 top-0 w-[100%] h-[100vh] bg-[#000300] ease-in-out duration-500 z-20"
              : "fixed left-[-100%]"
          }
        >
          <ul className="flex flex-col gap-6 items-center p-[80px] text-xl">
            <li>
              <Link to="/" onClick={() => handleLinkClick("home")}>
                <span
                  className={`${
                    activeLink === "home"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => handleLinkClick("about")}>
                <span
                  className={`${
                    activeLink === "about"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link to="/trainer" onClick={() => handleLinkClick("trainer")}>
                <span
                  className={`${
                    activeLink === "trainer"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Trainer
                </span>
              </Link>
            </li>
            <li>
              <Link to="/prices" onClick={() => handleLinkClick("prices")}>
                <span
                  className={`${
                    activeLink === "prices"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Prices
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                onClick={() => handleLinkClick("testimonials")}
              >
                <span
                  className={`${
                    activeLink === "testimonials"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Testimonials
                </span>
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => handleLinkClick("blog")}>
                <span
                  className={`${
                    activeLink === "blog"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Blog
                </span>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => handleLinkClick("contact")}>
                <span
                  className={`${
                    activeLink === "contact"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
