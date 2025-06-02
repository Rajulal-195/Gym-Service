import React from "react";
import CustomHero from "../Components/CustomHero";
import Footer from "../Components/Footer";
import TrainerList from "../Components/Trainer/TrainerList";

const Trainer = () => {
  return (
    <div>
      <CustomHero link={"trainer"} text={"Trainers"} />
      <TrainerList />
      <Footer />
    </div>
  );
};

export default Trainer;
