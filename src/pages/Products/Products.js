import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import image from '../../assets/images/homebg.jpg'
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([])
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)

    const size = 6

    useEffect(() => {
        fetch(`https://parlour-server.onrender.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                 
                setProducts(data.products)
                const count = data.count
                const pageNumber = Math.ceil(count / 6)
                setPageCount(pageNumber)
            })
    }, [page])

    return (
        <div className='px-20'>
            <div className=' h-40  lg:h-60' style={{ backgroundImage: `url(${image})` }}>
                <p className=' font-mono  uppercase  text-sm lg:text-xl text-opacity-100  flex items-center justify-center pt-20 font-bold  text-info'><span className='border-b-4 border-indigo-500 '> <Link to='/home'>Home</Link> / products</span></p>
            </div>
            <h3 className=' text-sm lg:text-3xl text-center font-mono pt-4 font-bold  text-info '> Our Products </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    products.map((product,i) => <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6'>
                        <Product
                            product={product}
                            key={product._id}
                        >
                        </Product>

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
                                    onClick={() => setPage(number)}>{number + 1}</button>

                            </div>

                        )
                }
            </div>

        </div>
    );
};

export default Products;