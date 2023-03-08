import React from 'react';
import avatar1 from '../../assets/images/avatar1.png'
import avatar2 from '../../assets/images/avatar2.png'
import avatar3 from '../../assets/images/avatar3.png'
import HomeTestimonial from './HomeTestimonial';

const HomeTestimonials = () => {

    const testimonials = [
        {
            _id: 1,
            image: avatar1,
            name: 'Nash Patrik',
            position:'CEO , Manpol',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            _id: 2,
            image: avatar2,
            name: 'Miriam Barron',
            position:'CEO , Manpol',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            _id: 3,
            image: avatar3,
            name: 'Bria Malone',
            position:'CEO , Manpol',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            _id: 4,
            image: avatar1,
            name: 'Nash Patrik',
            position:'CEO , Manpol',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            _id: 5,
            image: avatar2,
            name: 'Bria Malone',
            position:'CEO , Manpol',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        },
        {
            _id: 6,
            image: avatar3,
            name: 'Cristiano onaldo',
            position:'CEO , Manpol',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat '
        }

    ]

    return (
        <div className='my-10 px-6'>
            <h1 className='text-2xl lg:text-5xl font-bold text-center'>Testimonials</h1>
            <div className='grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-3 my-5 '>



                {
                    testimonials.map((testimonial,i) =>

                        <HomeTestimonial key={i} id="#item6" testimonial={testimonial}></HomeTestimonial>

                    )
                }
            </div>
        </div>
    );
};

export default HomeTestimonials;