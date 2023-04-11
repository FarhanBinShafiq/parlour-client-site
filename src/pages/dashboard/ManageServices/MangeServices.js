import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import ConfirmationModal from '../../Sharedpages/ConfirmationModal/ConfirmationModal';
import Loading from '../../Sharedpages/Loading/Loading';

const MangeServices = () => {
    const [deletingServic, setDeletingService] = useState(null)

    const { data: services, isLoading, refetch } = useQuery({
        queryKey: ['serices'],
        queryFn: async () => {
            try {
                const res = await fetch('https://parlour-server.onrender.com/services')
                const data = await res.json();
                return data.serviceOptions;


            } catch (error) {

            }
        }
    })

    const closeModal = () => {
        setDeletingService(null)
    }

    //Handle deleting Service

    const handleDeleteService = (service) => {
        console.log('Deleted')
        fetch(`https://parlour-server.onrender.com/services/${service._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data)
                    refetch();
                    toast.success(`${service.name} deleted Successfully`)

                }
            })

    }






    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className=' text-3xl uppercase text-center'>Total Services:{services?.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Image</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            services.map((service, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={service.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>


                                        <div>
                                            <div className="font-bold">{service.name}</div>


                                        </div>
                                    </td>

                                    <td>$ <span>{service.price}</span></td>
                                    <th>
                                        <label className="btn   btn-xs"
                                            onClick={() => setDeletingService(service)}
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
                deletingServic && <ConfirmationModal
                    title={`Are you sure ,Want to delete the this service ?`}
                    message={`if you delete ${deletingServic.name}.It can not be undone.`}
                    closeModal={closeModal}
                    successAction={handleDeleteService}
                    successButtonName='Delete'
                    modalData={deletingServic}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MangeServices;