import React from 'react';
import aboutinfo from '../../assets/images/aboutinfo.jpg'

const AboutInfo = () => {
    return (
        <div className='font-mono'>
            <h4 className='lg:text-3xl font-bold text-center  text-info  '>Welcome to the best parlour in the town </h4>
            <div className="hero">

                <div className="hero-content flex-col  lg:flex-row-reverse ">

                    <div >

                        <img src={aboutinfo} className="  h-80 w-full rounded-lg" alt=''/>
                    </div>

                    <div>
                        <h4 className='text-sm lg:text-xl font-bold  text-infotext-center lg:text-left'>ABOUT OUR Parlour</h4>

                        <div tabIndex={0} className="collapse mt-4 bg-base-100  collapse-plus border border-base-300  rounded-box">
                            <div className="collapse-title text-xl uppercase   text-info font-medium">
                                Advanced Equipment
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                            </div>
                        </div>


                        <div tabIndex={0} className="collapse  mt-2  collapse-plus border border-base-300  rounded-box">
                            <div className="collapse-title text-xl uppercase font-medium  text-info ">
                                Certified Services
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                            </div>
                        </div>


                        <div tabIndex={0} className="collapse  mt-2 collapse-plus border border-base-300   rounded-box  ">
                            <div className="collapse-title text-xl uppercase  text-info font-medium">
                                Emergency Services
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                            </div>
                        </div>

                        <div tabIndex={0} className="collapse  mt-2 collapse-plus border border-base-300   rounded-box  ">
                            <div className="collapse-title text-xl uppercase  text-info font-medium">
                                Qualified Artists
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                            </div>
                        </div>







                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutInfo;