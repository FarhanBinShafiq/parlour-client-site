import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const { signInWithGoogle,signin } = useContext(AuthContext)


    const onSubmit = data => {
        console.log(data);
        signin(data.email,data.password)
        
        
    }

    return (
        <div>


            <div className="bg-blue-200  min-h-screen flex items-center pl-3 pr-3 ">
                <div className="w-full">
                    <h1 className="mb-5 text-xl lg:text-5xl font-bold text-info uppercase text-center">Log into your Account</h1>
                    <div className="bg-black p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        {/*React Hook form*/}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 font-bold  text-gray-600">Email</label>
                                <input {...register("email", { required: true, maxLength: 20 })} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 font-bold text-gray-600">Password</label>

                                <input {...register("password", { required: true, maxLength: 20 })} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>
                            <input type='Submit' className="block w-full bg-info text-white font-bold p-4 rounded-lg" />

                        </form>

                        <div className="divider text-info text-xl lg:text-3xl font-bold w-full border-opacity-50">OR</div>

                        <div className='sm:grid sm:grid-cols-1  lg:flex gap-8  place-items-center justify-center '>

                            <div>
                                <button className="block  bg-info text-white font-bold p-4 rounded-lg"
                                    onClick={() => signInWithGoogle()}
                                >Continue with Google</button>
                            </div><br />

                            <div >
                                <button className="block  bg-info text-white font-bold p-4 rounded-lg">Log in with Facebook</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    );
};

export default Login;