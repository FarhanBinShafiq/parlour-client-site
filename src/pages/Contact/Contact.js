import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/contact.jpg'
import Map from '../Sharedpages/Map/Map';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className=''>
            <div className=' h-60 w-full
             lg:h-80' style={{ backgroundImage: `url(${image})` }}>
                <p className=' font-mono uppercase  text-sm lg:text-xl text-opacity-100  flex items-center justify-center pt-20 lg:pt-40 font-bold   text-info'><span className='border-b-4 border-indigo-500 '> <Link to='/home'>Home</Link> / Contact US</span></p>
            </div>
            <div className='px-0 lg:px-12'> 
                <ContactForm></ContactForm>
                <Map ></Map>
            </div>
        </div>
    );
};

export default Contact;