import React from 'react';
import HomeBanner from './HomeBanner';
import HomeForm from './HomeForm';
import HomeInfo from './HomeInfo';
import HomeServices from './HomeServices'
import HomeTestimonials from './HomeTestimonials';


const Home = () => {
    return (
        <div>
            <HomeBanner />
            <HomeServices />
            <HomeInfo/>
            <HomeTestimonials/>
            <HomeForm/>


        </div>
    );
};

export default Home;