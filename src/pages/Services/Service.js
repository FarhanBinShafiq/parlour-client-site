import React from 'react';

const Service = (props) => {
    const  {name,desc,price,image}=props.service
    return (
        <div>
            <div className="card p-4 lg:card-side sm:h-75  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{desc}</p>
                    <p>Price: {price}</p>
                     
                </div>
            </div>
        </div>
    );
};

export default Service;