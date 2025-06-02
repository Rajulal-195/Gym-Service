import React from "react";
import { useParams } from "react-router-dom";
import Trainer1 from "../../assets/img/trainers/david.jpg";
import Trainer2 from "../../assets/img/trainers/matt.jpg";
import Trainer3 from "../../assets/img/trainers/rosy.jpg";
import Trainer4 from "../../assets/img/trainers/sofia.jpg";
import Header from "../Header";
import Footer from "../Footer";

const Cards = [
  {
    id: 1,
    img: Trainer1,
    type: "Body building coach",
    name: "David Williams",
    content: "Maintain a Perfect Structure After Workout",
  },
  {
    id: 2,
    img: Trainer2,
    type: "Body building coach",
    name: "Matt Stonie",
    content: "Maintain a Perfect Structure After Workout",
  },
  {
    id: 3,
    img: Trainer3,
    type: "Body building coach",
    name: "Rosy Rivera",
    content: "Maintain a Perfect Structure After Workout",
  },

  {
    id: 4,
    img: Trainer1,
    type: "Body building coach",
    name: "Sofia Lauren",
    content: "Maintain a Perfect Structure After Workout",
  },
  {
    id: 5,
    img: Trainer2,
    type: "Body building coach",
    name: "Matt Stonie",
    content: "Maintain a Perfect Structure After Workout",
  },
  {
    id: 6,
    img: Trainer3,
    type: "Body building coach",
    name: "David Williams",
    content: "Maintain a Perfect Structure After Workout",
  },
  {
    id: 7,
    img: Trainer4,
    type: "Body building coach",
    name: "Sofia Lauren",
    content: "Maintain a Perfect Structure After Workout",
  },
  {
    id: 8,
    img: Trainer1,
    type: "Body building coach",
    name: "David Williams",
    content: "Maintain a Perfect Structure After Workout",
  },
];

const TrainerContent = () => {
  const { id } = useParams();
  const trainer = Cards.find((b) => b.id === parseInt(id));

  if (!trainer) {
    return <div>Trainer not Available!</div>;
  }
  return (
    <div>
      <Header />
      <div className=" flex flex-col sm:flex-row gap-10 mt-20 min-h-screen max-w-[80vw]">
        <div className="w-full h-full">
          <img
            src={trainer.img}
            alt={trainer.title}
            className="w-full max-w-2xl rounded-lg mb-4"
          />
        </div>
        <div className="flex flex-col text-center">
          <p className="text-gray-600 mb-4">{trainer.type}</p>
          <h1 className="text-3xl font-bold mb-4">{trainer.name}</h1>
          <p className="text-[18px] font-semibold md:h4 text-gray-700">
            {trainer.content}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrainerContent;
