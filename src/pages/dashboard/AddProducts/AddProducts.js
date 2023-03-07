import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const navigate=useNavigate()

    const handleAddProducts = data => {
        console.log(data)
        //image
        const imageHostKey = process.env.React_APP_imgbb_key
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })

            .then(res => res.json())
            .then(imageData => {
                console.log(imageData)
                if (imageData.success) {
                    console.log(imageData.data.url);
                    const product = {
                        name: data.productname,

                        price: data.price,
                        image: imageData.data.url
                    }

                    fetch('https://parlour-server.up.railway.app/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },

                        body: JSON.stringify(product)
                    })

                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.productname} Product is added successfully`)
                            navigate('/dashboard/manageproducts')
                        })

                }
            })





    }

    return (
        <div>
            <div className="bg-blue-200  min-h-screen flex items-center pl-3 pr-3 ">
                <div className="w-full">
                    <h1 className="mb-5 text-xl lg:text-5xl font-bold text-info uppercase text-center">Add a product</h1>
                    <div className="bg-black p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        {/*React Hook form*/}
                        <form onSubmit={handleSubmit(handleAddProducts)}>
                            <div className="mb-5">
                                <label htmlFor="productname" className="block mb-2 font-bold  text-gray-600">Product Name</label>
                                <input {...register("productname", { required: true, maxLength: 20 })} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>



                            <div className="mb-5">
                                <label htmlFor="price" className="block mb-2 font-bold  text-gray-600">Price</label>
                                <input {...register("price", { required: true, maxLength: 20 })} className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>


                            <div className="form-control w-full max-w-xs">

                                <label className="label">
                                    <label htmlFor="image" className="block mb-2 font-bold  text-gray-600">Image</label>

                                </label>

                                <input type="file"
                                    {...register("image", {
                                        required: {
                                            value: true, message: "Photo is Required"
                                        }
                                    })}
                                    placeholder="Your Photo"
                                    className="input input-bordered w-full max-w-xs" />


                            </div><br />




                            <input type='Submit' className="block w-full bg-info text-white font-bold p-4 rounded-lg" />

                        </form>






                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProducts;