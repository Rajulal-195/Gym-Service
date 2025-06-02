import React from "react";
import CustomButton from "../CustomButton";

const ShortClip = () => {

  return (
    <section className="min-h-[100vh] px-4 py-12 bg-black">
      <div className="flex flex-col items-center">
        <h1 className="h1 text-white text-center">Short Clip</h1>
        <div className="w-full max-w-2xl aspect-video my-12 px-4 overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tUykoP30Gb0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <CustomButton
          containerStyles="px-6 py-3 bg-black"
          text={"Visit Our Channel"}
          onClick={() => window.open("https://youtube.com", "_blank")}
        />
      </div>
    </section>
  );
};

export default ShortClip;
