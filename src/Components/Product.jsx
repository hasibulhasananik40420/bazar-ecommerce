import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { addToCart } from '../redux/bazarSlice'
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const dispatch = useDispatch()
    const [details, setDetails] = useState({})
    const [baseQun, setBaseQun] = useState(1)

    const location = useLocation()
    useEffect(() => {
        setDetails(location.state.product)


    }, [])
    return (
        <div className='mx-20 mt-20 font-Poppins'>

            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto relative">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap ">

                        <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={details.image} />
                        <div className='absolute top-32 right-50'>
                            {details.isNew && <p className='bg-red-500 text-white font-Poppins font-[500] px-6 py-1'>sale</p>}
                        </div>

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{details.title}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">{details.description}</p>


                            <div className="flex gap-8 mt-4">
                                <p className=' font-Poppins font-bold text-3xl'>${details.price} </p>
                                <p className='line-through text-gray-500 text-3xl'>${details.oldPrice} </p>

                            </div>


                            <div className='flex items-center gap-4'>
                                <div className='w-52 flex items-center justify-between text-gray-500 p-3 border gap-4 mt-8'>
                                    <p className='text-sm  font-Roboto'> Quantity</p>
                                    <div className='flex items-center gap-4 text-sm font-semibold'>
                                        <button onClick={() => setBaseQun(baseQun === 1 ? (baseQun) : baseQun - 1)} className='border h-5 flex items-center justify-center px-2 text-lg hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black rounded'>-</button>
                                        <span>{baseQun}</span>
                                        <button onClick={() => setBaseQun(baseQun + 1)} className='border h-5 flex items-center justify-center px-2 text-lg hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black rounded'>+</button>
                                    </div>
                                </div>

                                <div className='mt-8'>
                                    <button onClick={() => dispatch(addToCart({
                                        _id: details._id,
                                        title: details.title,
                                        image: details.image,
                                        price: details.price,
                                        quantity: baseQun,
                                        description: details.description
                                    })) & toast.success(`${details.title} is added`)} className='bg-black text-white px-6 py-3 font-Roboto font-medium rounded-sm'>add to cart</button>
                                </div>
                            </div>

                            <h1 className='text-2xl font-Poppins font-medium mt-6'>Category: <span className='text-gray-900'>{details.category}</span></h1>
                        </div>
                    </div>

                    <ToastContainer
                        position="top-left"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                </div>
            </section>


        </div>
    )
}

export default Product