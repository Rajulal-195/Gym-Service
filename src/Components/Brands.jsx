import React from 'react'
import Brand1 from "../assets/img/brands/brand-1.png"
import Brand2 from "../assets/img/brands/brand-2.png"
import Brand3 from "../assets/img/brands/brand-3.png"
import Brand4 from "../assets/img/brands/brand-4.png"
import Brand5 from "../assets/img/brands/brand-5.png"

const Brands = () => {
  return (
        <section className='min-h-[40vh] flex justify-center items-center'>
          <div className='flex flex-wrap gap-10'>
            <a href="#"><img src={Brand1} alt="" className='hover:text-white'/></a>
            <a href="#"><img src={Brand2} alt="" className='hover:text-white'/></a>
            <a href="#"><img src={Brand3} alt="" className='hover:text-white'/></a>
            <a href="#"><img src={Brand4} alt="" className='hover:text-white'/></a>
            <a href="#"><img src={Brand5} alt="" className='hover:text-white'/></a>
          </div>
            
        </section>
  )
}

export default Brands