import "../../Components/Blog/BlogSection.css";
import Trainer1 from "../../assets/img/trainers/david.jpg";
import Trainer2 from "../../assets/img/trainers/matt.jpg";
import Trainer3 from "../../assets/img/trainers/rosy.jpg";
import Trainer4 from "../../assets/img/trainers/sofia.jpg";
import { Link } from "react-router-dom";
import RoundButton from "../RoundButton";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
const BlogSection = () => {
  return (
    <section className=" bg-white pt-10 pb-10">
      <div className="px-16">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 w-full gap-5">
          {Cards.map((item, index) => (
            <div key={item.id} className="">
              <img src={item.img} className="mb-5 w-full h-auto object-cover" />

              <div>
                <h3 className="text-[18px] font-semibold text-center md:h4 text-gray-700 hover:text-red-500 uppercase ">
                  <Link to={`/trainer/${item.id}`}> {item.name} </Link>
                </h3>
              </div>
              <div>
                <p className="text-gray-700 text-center">{item.type}</p>
              </div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
