import React from 'react';
import { Link } from 'react-router-dom';

import homebanner1 from '../../assets/images/homebanner1.png'
import homebg from '../../assets/images/homebg.jpg'


const HomeBanner = () => {
    return (


        <div className='max-w-max min-h-screen '>
            <div className="carousel ">


                <div id="item1" className="carousel-item w-full">

                    <div className="hero min-h-screen bg-base-300">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={homebanner1} className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                            <div>
                                <h1 className="text-2xl lg:text-5xl font-bold">Box Office News!</h1>
                                <p className="py-6 lowercase">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-info">Get Started</button>
                            </div>
                        </div>
                    </div>

                </div>


                <div id="item2" className="carousel-item  w-full">
                    <div className="hero min-w-fit" style={{ backgroundImage: `url(${homebg})` }} >
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-2xl uppercase lg:text-5xl font-bold">Hello There</h1>
                                <h3 className="mb-5 text-xl lg:text-3xl font-bold">We are Providing best Parlor Service in the town</h3>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                <div>
                                    <button className="btn btn-info"><Link to='/products'>See All Products</Link></button>
                                    <button className="btn ml-0 lg:ml-8 mt-2 lg:mt-0 btn-info"><Link to='/services'>See All Our Services</Link></button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>






            </div>
            <div className="flex justify-center w-full space-x-1.5 py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>

            </div>
        </div>
    );
};

export default HomeBanner;