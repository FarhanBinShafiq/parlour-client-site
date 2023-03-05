import React from 'react';

const HomeService = ({ service }) => {
    return (
        <div className="card w-86 bg-black text-white shadow-xl p-5">
      

            <figure><img className='w-20' src={service.img} alt="Movie" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold uppercase" >{service.serviceName}</h2>
                <p className='text-info font-bold'> $ {service.price}</p>
                <p>{service.desc}</p>
                <div className="card-actions mt-2">
                    <button className="btn btn-info">Get a Service</button>
                </div>
            </div>
        </div>
    );
};

export default HomeService;