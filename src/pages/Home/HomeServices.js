import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/icons/img1.png'
import img2 from '../../assets/icons/img2.png'
import img3 from '../../assets/icons/img3.png'
import HomeService from './HomeService';

const HomeServices = () => {


    const services = [
        {
            id: 1,
            _img: img1,
            serviceName: 'Anti Age Face Treatment',
            price: 199,
            desc: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },

        {
            _id: 2,
            img: img2,
            serviceName: 'Hair Color & Styleing',
            price: 150,
            desc: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },

        {
            _id: 3,
            img: img3,
            serviceName: 'Skin Care Treatment',
            price: 299,
            desc: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        }

    ]

    return (
        <div className='my-10 px-6'>
            <h1 className='text-center text-xl font-bold lg:text-5xl'>Our Awesome <span className='text-info'>Services</span></h1>

            <div className='grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-3 my-5'>
                {
                    services.map((service,i) =>
                        <HomeService key={i} service={service}></HomeService>
                    )
                }
            </div>

            <div className='grid place-items-center'>

                <button className='btn btn-info'><Link to='/services'>Explore More</Link></button>
            </div>

        </div>
    );
};

export default HomeServices;