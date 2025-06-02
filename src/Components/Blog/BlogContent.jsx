import { useParams } from "react-router-dom";
import Blog1 from "../../assets/img/blog/post1.jpg";
import Blog2 from "../../assets/img/blog/post2.jpg";
import Blog3 from "../../assets/img/blog/post3.jpg";
import Blog4 from "../../assets/img/blog/post4.jpg";
import Header from "../Header";
import Footer from "../Footer";

const blogData = [
  {
    id: 1,
    img: Blog1,
    date: "March 10, 2020",
    title: "Maintain a Perfect Structure After Workout",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit esse null  dolore magna aliquet consequat dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: 2,
    img: Blog2,
    date: "March 10, 2020",
    title: "Maintain a Perfect Structure After Workout",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit esse null  dolore magna aliquet consequat dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: 3,
    img: Blog3,
    date: "March 10, 2020",
    title: "Maintain a Perfect Structure After Workout",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit esse null  dolore magna aliquet consequat dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    id: 4,
    img: Blog4,
    date: "March 10, 2020",
    title: "Maintain a Perfect Structure After Workout",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit esse null  dolore magna aliquet consequat dolore magna aliqu Lorem ipsum dolor sit amet, consectetur adip",
  },
];
const BlogContent = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div>
      <Header />
      <div className=" flex flex-col sm:flex-row gap-10 mt-20 min-h-screen max-w-[80vw]">
        <div className="w-full h-full">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full max-w-2xl rounded-lg mb-4"
          />
        </div>
        <div className="flex flex-col text-center">
          <p className="text-gray-600 mb-4">{blog.date}</p>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-[18px] font-semibold md:h4 text-gray-700">
            {blog.content}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogContent;
