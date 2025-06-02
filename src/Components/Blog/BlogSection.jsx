import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Components/Blog/BlogSection.css";
import Blog1 from "../../assets/img/blog/post1.jpg";
import Blog2 from "../../assets/img/blog/post2.jpg";
import Blog3 from "../../assets/img/blog/post3.jpg";
import Blog4 from "../../assets/img/blog/post4.jpg";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";

const Cards = [
  {
    img: Blog1,
    date: "March 10, 2020",
    title: "Maintain a Perfect Structure After Workout",
  },
  {
    img: Blog2,
    date: "March 10, 2020",
    title: "Maintain a Perfect Structure After Workout",
  },
  {
    img: Blog3,
    date: "March 10, 2020",
    title: "Maintain a Perfect Structure After Workout",
  },
  {
    img: Blog4,
    date: "March 10, 2020",
    title: "Maintain a Perfect Structure After Workout",
  },
];

const BlogSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default: 4 slides per row
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screens <= 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides for medium screens
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // For screens <= 768px
        settings: {
          slidesToShow: 2, // Show 2 slides for smaller screens
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 580, // For screens <= 480px (Mobile screens)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/blog");
  };
  return (
    <section className="min-h-[93vh] bg-black pt-16">
      <h1 className="h1 text-white text-center">BLOGS</h1>
      <div className="flex flex-col items-center mx-8 my-10">
        <Slider {...settings} className="w-full max-w-7xl px-4">
          {Cards.map((item, index) => (
            <div key={index} className="px-6">
              <div>
                <img
                  src={item.img}
                  className="mb-5 w-full h-auto object-cover"
                />
              </div>
              <div>
                <p className="text-gray-400">{item.date}</p>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold md:h4 text-white hover:text-red-500 uppercase ">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
        <CustomButton
          onClick={handleClick}
          containerStyles={"px-9 py-3 my-16"}
          text={"VIEW ALL"}
        />
      </div>
    </section>
  );
};

export default BlogSection;
