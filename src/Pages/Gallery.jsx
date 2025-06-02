import React from 'react'
import Header from "../Components/Header"
import CustomHero from '../Components/CustomHero';
import GallerySection from '../Components/Gallery/GallerySection';

const Gallery = () => {
  return (
    <>
      <CustomHero link={"#"} text={"Gallery"} />
      <GallerySection />
    </>
  );
}

export default Gallery