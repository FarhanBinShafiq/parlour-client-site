import React from 'react';
import { AiOutlineStar } from "react-icons/ai";

const HomeTestimonial = ({ testimonial }) => {
    return (
        <div >

            <div className="carousel-item w-86 p-5">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={testimonial.image} className='lg:w-24 ' alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-info uppercase">{testimonial.name}</h2>
                        <p className='font-bold'>{testimonial.position}</p>
                        <p>{testimonial.desc}</p>
                         <div className='flex'>
                            <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/> <AiOutlineStar/>
                         </div>
                    </div>
                </div>
               
            </div>


        </div>
    );
};

export default HomeTestimonial;