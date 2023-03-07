import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, image, price } = props.product;
    return (
        <div className=' transform transition duration-500 hover:scale-40'>
            <div className="card  lg:w-96 sm:h-75  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-60" />
                </figure>
                <div className="card-body font-mono  items-center text-center">
                    <h2 className="card-title text-info uppercase ">{name}</h2>
                    <p >Price: $ <span>{price}</span></p>
                    
                    <div className="card-actions">
                        <Link to='/'> <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-info to-primary">Add To Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

 