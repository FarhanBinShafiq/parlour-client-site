import React from 'react';
import Value from './Value';
import img2 from '../../assets/icons/value1.png'
 

const AboutValues = () => {

    const values = [
        {
            id: 1,
            img: img2,
            name: 'OUR Vision',
            desc: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },

        {
            id: 2,
            img: img2,
            name: 'Hair Color & Styleing',
        
            desc: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },

        {
            id: 3,
            img: img2,
            name: 'OUR VALUES',
         
            desc: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        }

    ]

    return (
        <div className='my-10 px-6'>
          

            <div className='grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-3 my-5'>
                {
                    values.map((value,i) =>
                        <Value value={value} key={value.id}></Value>
                    )
                }
            </div>

           

        </div>
    );
};

export default AboutValues;