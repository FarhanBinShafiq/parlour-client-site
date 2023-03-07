import React from 'react';
import HomeBanner from './HomeBanner';
import HomeForm from './HomeForm';
import HomeInfo from './HomeInfo';
import HomeServices from './HomeServices'
import HomeTestimonials from './HomeTestimonials';
import Map from '../Sharedpages/Map/Map'
import AboutValues from '../About/AboutValues'


const Home = () => {
    return (
        <div className=' font-serif lg:px-20 md:px-16 px-0'>
            <HomeBanner />
            <HomeServices />
            <AboutValues/>
            <HomeInfo/>
            <HomeTestimonials/>
            <Map></Map><br></br>
            <HomeForm/>
            


        </div>
    );
};

export default Home;