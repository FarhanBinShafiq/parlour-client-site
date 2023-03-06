import React from 'react';
import HomeBanner from './HomeBanner';
import HomeForm from './HomeForm';
import HomeInfo from './HomeInfo';
import HomeServices from './HomeServices'
import HomeTestimonials from './HomeTestimonials';


const Home = () => {
    return (
        <div className=' font-serif lg:px-20 md:px-16 px-0'>
            <HomeBanner />
            <HomeServices />
            <HomeInfo/>
            <HomeTestimonials/>
            <HomeForm/>


        </div>
    );
};

export default Home;