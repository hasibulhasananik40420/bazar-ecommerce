import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineClose } from 'react-icons/md';
import { decrementQuantity, incrementQuantity, removeToCart, resetItem } from '../redux/bazarSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const CartItem = () => {
    const dispatch = useDispatch()
    const productDatas = useSelector((state) => state.bazar.porductData)

    return (
        <div className='w-2/3 pr-10'>
            <div className='w-full'>
                <h2 className='text-2xl font-Edu font-semibold'>Shopping Cart</h2>
            </div>

            <div>
                {
                    productDatas.map(item =>
                        <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>

                            <div className='flex items-center gap-2'>
                                <MdOutlineClose onClick={() => dispatch(removeToCart(item._id)) & toast.info(`${item.title} is removed`)} className='text-xl text-gray-600 hover:text-red-500 cursor-pointer duration-300' />
                                <img className='w-32 h-32 object-cover' src={item.image} alt="" />
                            </div>

                            <h1 className='text-xl font-medium font-Edu w-52'>{item.title}</h1>
                            <h1 className='text-xl font-medium font-Edu w-10'>${item.price}</h1>

                            <div className='w-52 flex items-center justify-between text-gray-500 p-3 border gap-4'>
                                <p className='text-sm  font-Edu'> Quantity</p>
                                <div className='flex items-center gap-4 text-sm font-semibold'>
                                    <button onClick={()=>dispatch(decrementQuantity({
                                         _id: item._id,
                                        //  title: item.title,
                                        //  image: item.image,
                                         price: item.price,
                                         quantity: 1,
                                        //  description: item.description
                                    }))} className='border h-5 flex items-center justify-center px-2 text-lg hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black rounded'>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={()=>dispatch(incrementQuantity({
                                         _id: item._id,
                                        //  title: item.title,
                                        //  image: item.image,
                                         price: item.price,
                                         quantity: 1,
                                        //  description: item.description
                                    }))} className='border h-5 flex items-center justify-center px-2 text-lg hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black rounded'>+</button>
                                </div>
                            </div>

                            <p className='text-xl font-Edu font-bold'>${item.quantity * item.price}</p>

                        </div>



                    )}

                <button onClick={()=>dispatch(resetItem()) & toast.error(`All cart is removed`)} className='bg-red-600 font-Edu font-medium px-4 py-2 rounded text-white mt-6 ml-6'>Remove all cart</button>

              <div className='mt-6'>
              <Link to='/' className='text-xl font-Edu font-semibold text-gray-600 '>
                 Countine shopping!!
                </Link>
              </div>

            </div>

            <ToastContainer
                position="top-left"
                autoClose={3000}
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
    )
}

export default CartItem