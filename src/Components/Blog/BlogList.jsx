import "../../Components/Blog/BlogSection";
import Blog1 from "../../assets/img/blog/post1.jpg";
import Blog2 from "../../assets/img/blog/post2.jpg";
import Blog3 from "../../assets/img/blog/post3.jpg";
import { Link } from "react-router-dom";

const Cards = [
  {
    id: 1,
    img: Blog1,
    date: "March 3, 2024",
    title: "Maintain a Perfect Structure After Workout",
  },
  {
    id: 2,
    img: Blog2,
    date: "March 28, 2024",
    title: "Maintain a Perfect Structure After Workout",
  },
  {
    id: 3,
    img: Blog3,
    date: "july 5, 2024",
    title: "Maintain a Perfect Structure After Workout",
  },
];

const BlogSection = () => {
  return (
    <section className=" bg-white pt-10 pb-10">
      <div className="px-16">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 w-full gap-5">
          {Cards.map((item, ) => (
            <div key={item.id} className="">
              <img src={item.img} className="mb-5 w-full h-auto object-cover" />

              <div>
                <p className="text-gray-700">{item.date}</p>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold md:h4 text-gray-700 hover:text-red-500 uppercase ">
                  <Link to={`/blog/${item.id}`}> {item.title} </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
