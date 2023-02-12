import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
 
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
const Signup = () => {

    const { register, handleSubmit } = useForm();
    const { signInWithGoogle,createUser,updateUser} = useContext(AuthContext)
    const [signupError,setSignupError]=useState('')
    

    const handleCreateAccount = async data => {
         console.log(data)
         setSignupError('')
         createUser(data.email,data.password)
         .then(result=>{
            const user=result.user;
            console.log(user)
            toast('User Created Successfully')
            //user proile update
            const updateInfo={
                displayName:data.name
            }
            updateUser(updateInfo)
            .then(()=>{})
            .catch(err=>{
                console.log(err)
            })

         })

         .catch(error => {
      console.log(error.message)
      setSignupError(error.message)
    
  })
       
       }

    return (
        <div>


            <div className="bg-blue-200  min-h-screen flex items-center pl-3 pr-3 ">
                <div className="w-full">
                    <h1 className="mb-5 text-xl lg:text-5xl font-bold text-info uppercase text-center">Create a new Account</h1>
                    <div className="bg-black p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        {/*React Hook form*/}
                        <form onSubmit={handleSubmit(handleCreateAccount)}>

                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 font-bold  text-gray-600">Full Name</label>
                                <input {...register("name", { required: true, maxLength: 20 })} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 font-bold  text-gray-600">Email</label>
                                <input {...register("email", { required: true, maxLength: 20 })} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>

                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 font-bold text-gray-600">Password</label>

                                <input {...register("password", { required: true, maxLength: 20 })} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                                
                            </div>
                            <input type='Submit' className="block w-full bg-info text-white font-bold p-4 rounded-lg" />
                             {
                                signupError && <p className='text-red-600'>{signupError}</p>
                             }
                        </form>
                       
                        <p>Already have an account ? <Link to="/login" className='text-teal-600 bg-black uppercase '>Login</Link> </p>

                        <div className="divider text-info text-xl lg:text-3xl font-bold w-full border-opacity-50">OR</div>

                        <div className='sm:grid sm:grid-cols-1  lg:flex gap-8  place-items-center justify-center '>

                            <div>
                                <button className="block  bg-info text-white font-bold p-4 rounded-lg"
                                    onClick={() => signInWithGoogle()}
                                >Continue with Google</button>
                            </div><br />

                            <div >
                                <button className="block  bg-info text-white font-bold p-4 rounded-lg">Continue with Facebook</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    );
};

export default Signup;