import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/img/testimonial/maria.jpg";
import ImgdDa from "../../assets/img/testimonial/diwash.jpg";
import ImgdAf from "../../assets/img/testimonial/diwashbefore.jpg";

const CardComponent = ({ name, imgb, imga, message }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="border rounded-lg shadow-md overflow-hidden p-4 bg-slate-300 mb-5">
      <div className="relative p-5">
        <Slider {...sliderSettings}>
          <div className="relative ">
            <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 text-sm rounded">
              Before
            </div>
            <img
              src={imgb}
              alt="Before"
              className="w-full h-72 object-cover object-center"
            />
          </div>
          <div className="relative">
            <div className="absolute top-2 left-2 bg-gray-800 text-white px-2 py-1 text-sm rounded">
              After
            </div>
            <img
              src={imga}
              alt="After"
              className="w-full h-72 object-cover object-center"
            />
          </div>
        </Slider>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-center">{name}</h3>
        <p className="text-gray-600 text-center">{message}</p>
      </div>
    </div>
  );
};

const TestimonialComponent = () => {
  const Profile = [
    {
      name: "Alish",
      imgb: Img1,
      imga: Img1,
      message:
        "This is a test message for a relationship between a user and a relationship between a user and a relationship between a user and a relationship between",
    },
    {
      name: "John",
      imgb: Img1,
      imga: Img1,
      message:
        "This is another test message showcasing a different user testimonial.",
    },
    {
      name: "Alice",
      imgb: Img1,
      imga: Img1,
      message: "A wonderful experience shared by the user in their journey.",
    },
    {
      name: "Bob",
      imgb: Img1,
      imga: Img1,
      message:
        "Another great testimonial that highlights the features and benefits.",
    },
    {
      name: "Diwash",
      imgb: ImgdAf,
      imga: ImgdDa,
      message:
        "Another great testimonial that highlights the features and benefits.",
    },
  ];

  return (
    <section className=" ">
      <div className="mt-14 min-h-[80vh] grid grid-cols-1 object-center sm:grid-cols-2  md:grid-cols-3 gap-4">
        {Profile.map((profile, index) => (
          <CardComponent
            key={index}
            name={profile.name}
            imgb={profile.imgb}
            imga={profile.imga}
            message={profile.message}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialComponent;
