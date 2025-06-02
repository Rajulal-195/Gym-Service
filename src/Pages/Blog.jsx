import React from "react";
import BlogList from "../Components/Blog/BlogList";
import Footer from "../Components/Footer";
import CustomHero from "../Components/CustomHero";
const Blog = () => {
  return (
    <>
      <CustomHero link={"blog"} text={"Blogs"} />
      <BlogList />
      <BlogList />
      <Footer />
    </>
  );
};

export default Blog;
