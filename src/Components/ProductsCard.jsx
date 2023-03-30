import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { addToCart } from '../redux/bazarSlice'
import 'react-toastify/dist/ReactToastify.css';

const ProductsCard = ({ product }) => {

    // console.log(product)
 


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const _id = product.title
    const isString = (_id) => {
        return String(_id).toLowerCase().split(' ').join('')
    }
    const rootId = isString(_id)

    const handleDetails = () => {

        navigate(`/product/${rootId}`, { state: { product: product } })


    }

    return (
        <div className='group font-Poppins relative'>

            <div onClick={handleDetails} className='w-full h-96 overflow-hidden cursor-pointer'>
                <img className='w-full h-full object-cover group-hover:scale-105 duration-500' src={product.image} alt="" />
            </div>


            <div className='w-full border-[1px] px-2 py-4 '>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1>{product.title.substring(0, 15)}</h1>

                    </div>
                    <div className='flex justify-end gap-2 relative overflow-hidden w-28'>
                        <div className=' flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
                            <p className=' font-Poppins'>${product.price}</p>
                            <p className='line-through text-gray-500'>${product.oldPrice}</p>
                        </div>

                        <button onClick={() => dispatch(addToCart({
                            _id: product._id,
                            title: product.title,
                            image: product.image,
                            price: product.price,
                            quantity: 1,
                            description: product.description
                        })) & toast.success(`${product.title} is added`)} className='absolute w-[100px] z-20 text-red-600 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'><span>add to cart</span> <span><BsArrowRightShort /></span></button>

                    </div>

                </div>
                <div><h2>{product.category}</h2></div>
                <div className='absolute top-4 right-0'>
                    {product.isNew && <p className='bg-purple-700 text-white font-Poppins font-[500] px-6 py-1'>sale</p>}
                </div>



                {/* <Pagination product={product}/> */}



            </div>



           

            <ToastContainer
                position="top-left"
                autoClose={2000}
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

export default ProductsCard