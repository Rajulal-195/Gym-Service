import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperButton from "./SwiperButton";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className="relative w-full h-full">
      <Swiper>
        <SwiperSlide>
          <div className="relative h-[80vh] flex justify-end pt-48">
            <div className="absolute right-[15%] flex flex-col gap-4 items-center lg:items-start lg:max-w-[700px]">
              <h1 className="text-6xl text-left text-white font-bold">
                <span className="text-red-600">Hard Work</span>
                <br />
                is For Every Success
              </h1>
              <p className="text-white text-left">
                Start by taking inspiration, Continue it to give inspiration
              </p>
              <CustomButton
                onClick={handleClick}
                text="Get started"
                containerStyles="w-[196px] h-[62px] bg-red-500 mt-4"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="relative h-[80vh] flex justify-end pt-48">
            <div className="absolute right-[15%] flex flex-col gap-4 items-center lg:items-start lg:max-w-[700px]">
              <h1 className="text-6xl text-left text-white font-bold">
                <span className="text-red-600">Now Pain</span>
                <br />
                Then Gain -Biswash
              </h1>
              <p className="text-white text-left">
                Start by taking inspiration, Continue it to give inspiration
              </p>
              <CustomButton
              onClick={handleClick}
                text="Get started"
                containerStyles="w-[196px] h-[62px] bg-red-500 mt-4 "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperButton />
      </Swiper>
    </div>
  );
};

export default Slider;
