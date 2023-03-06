import React from 'react';
import s1 from '../../assets/images/strength.png'
import s2 from '../../assets/images/s_2.png'

const Strength = () => {
  
    return (
        <div>
        <div className="hero h-100 mt-20 mb-20">
            <div className="hero-content grid gid-cols-1 lg:grid-cols-2 gap-4  ">

                <div>
                    <img src={s1} className=" h-80 lg:h-80 rounded-lg w-full lg:w-full" alt='' />
                </div>
                <div>

                    <h1 className="lg:text-5xl font-bold text-info">100% There For You</h1>
                    <p className="py-6">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                     
                </div>



            </div>
        </div>

        <div>
            <div className="hero h-100 mt-20 mb-20">
                <div className="hero-content grid gid-cols-1 lg:grid-cols-2 gap-4  ">

                  
                    <div>

                        <h1 className="lg:text-5xl font-bold text-info">100% Quality</h1>
                        <p className="py-6">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                         
                    </div>
                     
                    <div>
                        <img src={s2} className=" h-80 lg:h-80 rounded-lg w-full lg:w-full" alt='' />
                    </div>


                </div>
            </div>
        </div>
    </div>
    );
};

export default Strength;