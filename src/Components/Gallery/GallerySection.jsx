import React, { useState } from "react";
import Masonry from "react-masonry-css";
import img1 from "../../assets/img/Gallery/Equipments/img2.jpg";
import img2 from "../../assets/img/Gallery/Equipments/img3.jpg";
import img3 from "../../assets/img/Gallery/Equipments/img1.jpg";
import img4 from "../../assets/img/Gallery/Equipments/img4.jpg";
import img5 from "../../assets/img/Gallery/Equipments/img7.jpg";
import img6 from "../../assets/img/Gallery/Equipments/img5.jpg";
import img7 from "../../assets/img/Gallery/Equipments/img6.jpg";
import img8 from "../../assets/img/Gallery/Equipments/img8.jpg";
import img9 from "../../assets/img/Gallery/Cardio/img1.jpg";
import img10 from "../../assets/img/Gallery/Cardio/img2.jpg";
import img11 from "../../assets/img/Gallery/Cardio/img3.jpg";
import img12 from "../../assets/img/Gallery/Cardio/img4.jpg";
import img13 from "../../assets/img/Gallery/Cardio/img5.jpg";
import img14 from "../../assets/img/Gallery/Gym Workout/img1.jpg";
import img15 from "../../assets/img/Gallery/Gym Workout/img2.jpg";
import img16 from "../../assets/img/Gallery/Gym Workout/img3.jpg";
import img17 from "../../assets/img/Gallery/Gym Workout/img4.jpg";
import img18 from "../../assets/img/Gallery/Gym Workout/img5.jpg";
import img19 from "../../assets/img/Gallery/Gym Workout/img6.jpg";
import img20 from "../../assets/img/Gallery/Gym Workout/img7.jpg";
import img21 from "../../assets/img/Gallery/Achievements/img4.jpg";
import img22 from "../../assets/img/Gallery/Achievements/img1.jpg";
import img23 from "../../assets/img/Gallery/Achievements/img2.jpg";
import img24 from "../../assets/img/Gallery/Achievements/img3.jpg";
import img25 from "../../assets/img/Gallery/Achievements/img5.jpg";

const Cards = [
  {
    id: 1,
    img: img1,
    category: "Equipments",
  },
  {
    id: 2,
    img: img2,
    category: "Equipments",
  },
  {
    id: 3,
    img: img3,
    category: "Equipments",
  },
  {
    id: 4,
    img: img4,
    category: "Equipments",
  },
  {
    id: 5,
    img: img5,
    category: "Equipments",
  },
  {
    id: 6,
    img: img6,
    category: "Equipments",
  },
  {
    id: 7,
    img: img7,
    category: "Equipments",
  },
  {
    id: 8,
    img: img8,
    category: "Equipments",
  },
  {
    id: 9,
    img: img9,
    category: "Cardio",
  },
  {
    id: 10,
    img: img10,
    category: "Cardio",
  },
  {
    id: 11,
    img: img11,
    category: "Cardio",
  },
  {
    id: 12,
    img: img12,
    category: "Cardio",
  },
  {
    id: 13,
    img: img13,
    category: "Cardio",
  },
  {
    id: 14,
    img: img14,
    category: "Gym",
  },
  {
    id: 15,
    img: img15,
    category: "Gym",
  },
  {
    id: 16,
    img: img16,
    category: "Gym",
  },
  {
    id: 17,
    img: img17,
    category: "Gym",
  },
  {
    id: 18,
    img: img18,
    category: "Gym",
  },
  {
    id: 19,
    img: img19,
    category: "Gym",
  },
  {
    id: 20,
    img: img20,
    category: "Gym",
  },
  {
    id: 21,
    img: img21,
    category: "Achievements",
  },
  {
    id: 22,
    img: img22,
    category: "Achievements",
  },
  {
    id: 23,
    img: img23,
    category: "Achievements",
  },
  {
    id: 24,
    img: img24,
    category: "Achievements",
  },
  {
    id: 25,
    img: img25,
    category: "Achievements",
  },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filterCards =
    activeCategory === "All"
      ? Cards
      : Cards.filter((card) => card.category === activeCategory);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <section className="py-16">
      <h1 className="h1 text-center">Explore</h1>
      <div className="flex justify-center items-center my-8 px-8">
        <ul className="flex flex-wrap md:justify-center items-center gap-5 md:gap-8 text-white text-sm md:text-base font-semibold tracking-wider uppercase cursor-pointer">
          {["All", "Equipments", "Cardio", "Achievements"].map((category) => (
            <li
              key={category}
              className={`px-4 py-2 rounded ${
                activeCategory === category
                  ? "bg-red-600"
                  : "bg-black hover:bg-red-600"
              } transition duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid my-16 px-16 md:px-10 lg:px-20"
        columnClassName="my-masonry-grid_column"
      >
        {filterCards.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-md shadow-md cursor-pointer"
          >
            <img
              src={item.img}
              className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
              alt=""
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default GallerySection;
