import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "../../assets/img/testimonial/lucy.jpg";
import Img2 from "../../assets/img/testimonial/maria.jpg";
import Img3 from "../../assets/img/testimonial/michael.jpg";

const info = [
  {
    name: "Lucky",
    image: Img1,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    name: "Maria",
    image: Img2,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    name: "Michael",
    image: Img3,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    name: "Lucky",
    image: Img1,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet,lorem lorem consectetur adip lorem ips lorem ips lorem ips lorem ips lorem",
  },
  {
    name: "Maria",
    image: Img2,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-4 overflow-x-hidden min-h-[75vh] flex flex-col items-center">
      <h1 className="h1 mt-10 ">OUR TESTIMONIALS</h1>

      <Slider {...settings} className="w-full max-w-6xl mt-6 ">
        {info.map((item, index) => (
          <div
            key={index}
            className=" p-4 bg-white rouded-lg rounded-lg  flex flex-col items-center text-center "
          >
            <div className="flex flex-col items-center">
              <img
                src={item.image}
                alt="item.name"
                className="w-24 h-24 rounded-full mb-4"
              />

              <p className="text-gray-600">{item.message}</p>
              <h1 className="font-semibold text-xl text-red-600">
                {item.name}
              </h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
