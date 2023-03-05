import React from 'react';

const HomeForm = () => {
    return (
        <div>


            <div className="bg-black min-h-max  py-6 flex items-center px-6 ">
                <div className="w-full ">
                    <h1 className="mb-5 text-xl lg:text-3xl text-white font-bold text-center">Let us handle your<br /> skin ,Professionally</h1>
                    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <form action="">
                            <div className="mb-5">
                                <label for="name" className="block mb-2 font-bold text-gray-600">Name</label>
                                <input type="text" id="name" name="name" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>

                            <div className="mb-5">
                                <label for="name" className="block mb-2 font-bold text-gray-600">Email</label>
                                <input type="text" id="emai;" name="email" placeholder="Put in your Email." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>


                            <div className="mb-5">
                                <label for="name" className="block mb-2 font-bold text-gray-600">Message</label>
                              
                                <textarea placeholder="Send your message" className="border border-gray-300 shadow p-3 w-full rounded mb-    " ></textarea>
                            </div>

                 

                             

                            <button className="block w-full bg-info text-white font-bold p-4 rounded-lg">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default HomeForm;