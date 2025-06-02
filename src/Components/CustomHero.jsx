import React from 'react'
import HeroImage from "../assets/img/hero/bg.png";
import Header from "../Components/Header"

const CustomHero = ({link, text}) => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <Header activeLink={link} />
      <div className="absolute right-1/2 bottom-1/2">
        <h1 className="text-5xl  text-white">
          Home <span className="text-red-600">/{text}</span>
        </h1>
      </div>
    </section>
  );
}

export default CustomHero