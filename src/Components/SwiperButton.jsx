import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useSwiper } from "swiper/react";

const SwiperButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute right-[20%] bottom-[0] z-10 hidden sm:block">
      <div className="flex gap-2">
        <button
          className="border-2 border-red-600 p-2 rounded-sm hover:bg-red-600 ease-in-out duration-200"
          onClick={() => swiper.slidePrev()}
        >
          <GrFormPrevious size={20} color="white" />
        </button>
        <button
          className="border-2 border-red-600 p-2 rounded-sm hover:bg-red-600 ease-in-out duration-200"
          onClick={() => swiper.slideNext()}
        >
          <GrFormNext size={20} color="White" />
        </button>
      </div>
    </div>
  );
};

export default SwiperButton;
