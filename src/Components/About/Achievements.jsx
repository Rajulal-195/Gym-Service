import React, { useRef } from 'react'
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer";
import { FaBriefcase } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";


const stats = [
  {
    no: 19,
    icon: FaBriefcase,
    title: "Training Courses",
  },
  {
    no: 879,
    icon: MdWatchLater,
    title: "Working Hours",
  },
  {
    no: 150,
    icon: FaUsers,
    title: "Happy Customers",
  },
  {
    no: 7,
    icon: FaTrophy,
    title: "International Awards",
  },
];

const Achievements = () => {
  return (
    <section className='min-h[60vh] px-4 py-12'>
        <h1 className='h1 text-center'>Our Achievements</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-16'>
            {stats.map((item, index)=> { 
                
                const { ref, inView } = useInView({ threshold: 0.5 });
                return(
                <div key={index} className='flex flex-col justify-center items-center my-2'>
                    <div className='border border-red-700 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6'>
                        <div ref={ref} className='border border-red-500 w-full h-full flex items-center justify-center text-5xl rounded-full'>
                            {inView && (    
                            <CountUp start={0} end={item.no} duration={6} />
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <item.icon className='text-3xl mb-2' />
                        <h4 className='h4'>{item.title}</h4>
                    </div>
                </div>
            )})}
        </div>
    </section>
  )
}

export default Achievements