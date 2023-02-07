import React from 'react';
import homeinfo from '../../assets/images/homeinfo.png'

const HomeInfo = () => {
    return (
        <div>
            <div className="hero pt-0 lg:pt-8">
                <div className="hero ">
                    <div className="hero-content flex-col gap-8 lg:flex-row-reverse">

                        <div>
                            <h1 className="text-2xl lg:text-5xl font-bold">Let us handle your </h1>
                            <h1 className="text-2xl lg:text-5xl font-bold">screen <span className='text-info font-bold'>Professionally.</span></h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                            <div className='flex gap-8'>
                                <div>
                                    <h1 className="text-2xl text-info lg:text-5xl font-bold">500+</h1>
                                    <p className='font-bold'>Happy Customer</p>
                                </div>

                                <div>
                                    <h1 className="text-2xl text-info lg:text-5xl font-bold">16 +</h1>
                                    <p className='font-bold'>Total Service</p>
                                </div>
                            </div>
                        </div>

                        <img src={homeinfo} className="lg:max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeInfo;