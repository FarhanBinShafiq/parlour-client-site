import React from 'react';
import { Link } from 'react-router-dom';
 
import image from '../../assets/images/about_bg.jpg'
import AboutBanner from './AboutBanner';
import AboutInfo from './AboutInfo';



const About = () => {
    return (
        <div>
            <div className=' h-40  lg:h-80' style={{ backgroundImage: `url(${image})` }}>
                <p className=' font-mono uppercase  text-sm lg:text-xl text-opacity-100  flex items-center justify-center pt-40 font-bold  text-teal-600'><span className='border-b-4 border-indigo-500 '> <Link to='/home'>Home</Link> / About US</span></p>
            </div>

            <AboutBanner></AboutBanner>
            <AboutInfo></AboutInfo>
             


        </div>
    );
};

export default About;