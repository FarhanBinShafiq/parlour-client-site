import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import ConfirmationModal from '../../Sharedpages/ConfirmationModal/ConfirmationModal';
import Loading from '../../Sharedpages/Loading/Loading';

const MangeProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/products')
                const data = await res.json();
                return data;


            } catch (error) {

            }
        }
    })

    const closeModal = () => {
        setDeletingProduct(null)
    }

    //Handle deleting Service

    const handleDeleteProduct = (product) => {
        console.log('Deleted')
        console.log(deletingProduct.name)
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data)
                    refetch();
                    toast.success(`${product.name} deleted Successfully`)

                }
            })

    }






    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className=' text-3xl uppercase text-center'>Total Services:{products?.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>


                                        <div>
                                            <div className="font-bold">{product.name}</div>


                                        </div>
                                    </td>

                                    <td>$ <span>{product.price}</span></td>
                                    <th>
                                        <label className="btn   btn-xs"
                                            onClick={() => setDeletingProduct(product)}
                                            htmlFor="confirmation-modal"
                                        >Delete</label>
                                    </th>
                                </tr>

                            )
                        }

                    </tbody>


                </table>
            </div>


            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure ,Want to delete the this service ?`}
                    message={`if you delete ${deletingProduct.name}.It can not be undone.`}
                    closeModal={closeModal}
                    successAction={handleDeleteProduct}
                    successButtonName='Delete'
                    modalData={deletingProduct}
                
                ></ConfirmationModal>
            }


        </div>
    );
};

export default MangeProducts;