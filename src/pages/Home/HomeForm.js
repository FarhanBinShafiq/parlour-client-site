import React from 'react';

const HomeForm = () => {
    return (
        <div>


            <div className="bg-blue-200 min-h-screen flex items-center pl-3 pr-3 ">
                <div className="w-full">
                    <h1 className="mb-5 text-xl lg:text-5xl font-bold text-center">Let us handle your<br /> skin ,Professionally</h1>
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
                                <input type="text" id="message" name="message" placeholder="send us your message" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
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