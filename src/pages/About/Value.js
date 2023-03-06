import React from 'react';

const Value = ({value}) => {
    return (
        <div className="card w-86 bg-white text-black  p-5">
      

            <figure><img className='w-20' src={value.img} alt="Movie" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold uppercase text-info" >{value.name}</h2>
                
                <p>{value.desc}</p>
                 
            </div>
        </div>
    );
};

export default Value;