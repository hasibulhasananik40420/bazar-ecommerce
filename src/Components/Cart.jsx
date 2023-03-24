import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import StripeCheckout from 'react-stripe-checkout';
const Cart = () => {
    const productDatas = useSelector((state) => state.bazar.porductData)
    const userInfo = useSelector((state) => state.bazar.userInfo)
    const [totoalAmt, setTotalAmt] = useState('')
    const [payNow, setPayNow] = useState(false)

    useEffect(() => {
        let price = 0
        productDatas.map(item => {
            price += item.price * item.quantity
            return price
        })
        setTotalAmt(price.toFixed(2))
    }, [productDatas])


    const handleCheckout = () => {
        if (userInfo) {
            setPayNow(true)
            toast.success(`Your payment is done. Total $ ${totoalAmt}`)
        }
        else {
            toast.error('Please singin to checkout man!!')
        }
    }

    return (




        <div className='mt-20 mx-20'>

            {
                productDatas.length ? <p className='hidden'>productDatas.length</p> : <p className='text-2xl font-bold font-Edu  text-center text-red-500'>Cart is empty!!
                    <Link to='/' className='text-2xl font-bold font-Edu text-gray-500 '> Continue shopping click here</Link>

                </p>
            }


            <div className='flex py-20'>
                <CartItem />

                <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
                    <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                        <h2 className='text-2xl font-Edu font-medium'>Cart Totals</h2>
                        <p className='flex items-center gap-4'>
                            Subtotail{" "}
                            <span className='text-lg font-bold font-Edu'>
                                $ {totoalAmt}

                            </span>
                        </p>

                        <p className='flex items-center gap-4'>
                            Shapping{" "}
                            <span className='text-sm font-Edu'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab autem quidem sapiente et laborum, omnis necessitatibus esse expedita fugit voluptates?
                            </span>
                        </p>


                    </div>
                    <p className='flex justify-between mt-6 font-semibold font-Edu'>
                        Total{" "}
                        <span className='text-xl font-bold'>$ {totoalAmt}</span>

                    </p>


                    <button onClick={handleCheckout} className='px-4 py-2 bg-black text-white font-semibold font-Edu rounded w-full mt-6'>Process to checkout</button>

                    {/* {
                        payNow && (<div className='w-full mt-6 flex justify-center items-center'>
                            <StripeCheckout
                                stripeKey="pk_test_51L3O63A075wgahMPXUKqu3rlTdQ90cYSLsDuKsWMH70GXlQDUteuuo2eTmki8zEHEyz5q1n3gUsTCMudqCHo0FP000aFDt7yOk"
                                name="Online shopping"
                                amount={totoalAmt * 100}
                                label="Go to bazar"
                                description={`Your payment amount is ${totoalAmt}`}
                                email={userInfo?.email}

                            />


                        </div>)
                    } */}

                </div>
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

export default Cart