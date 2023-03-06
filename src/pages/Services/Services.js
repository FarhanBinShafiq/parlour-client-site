import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/homebg.jpg'
import Service from './Service';
import './Service.css'

const Services = () => {
    const [services, setServices] = useState([])
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)

    const size = 6

    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data.serviceOptions)
                const count = data.count
                const pageNumber = Math.ceil(count / 6)
                setPageCount(pageNumber)
                console.log(count)
            })
    }, [page])

    return (
        <div className='px-20'>
            <div className=' h-40  lg:h-60' style={{ backgroundImage: `url(${image})` }}>
                <p className=' font-mono  uppercase  text-sm lg:text-xl text-opacity-100  flex items-center justify-center pt-20 font-bold  text-teal-600'><span className='border-b-4 border-indigo-500 '> <Link to='/home'>Home</Link> / products</span></p>
            </div>
            <h3 className=' text-sm lg:text-3xl text-center font-mono pt-4 font-bold  text-teal-600 '> Our Services </h3>

            <div className='grid grid-cols-1  px-8 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <div className='grid grid-cols-1  gap-4'>
                        <Service
                            service={service}
                            key={service._id}
                        >
                        </Service>

                    </div>)
                }

            </div>

            <div className='pagination flex  items-center'>

                {
                    [...Array(pageCount).keys()]
                        .map(number =>

                            <div className="btn-group">
                                <button className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}>{number+1}</button>
                              
                            </div>

                        )
                }
            </div>

        </div>
    );
};

export default Services;

 