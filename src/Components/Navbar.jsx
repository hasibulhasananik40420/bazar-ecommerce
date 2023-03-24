import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft, BiUserPlus } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const porductData = useSelector((state) => state.bazar.porductData)
    const userInfo = useSelector((state) => state.bazar.userInfo)
    // console.log(userInfo)
    let [open, setOpen] = useState(false);

    return (
        <nav>
            <div className='shadow-sm w-full fixed top-0 left-0 z-50 font-Roboto'>
                <div className='md:flex items-center justify-between bg-[#1a2c79] py-4 md:px-20 px-7  '>
                    <div className=' font-bold text-2xl cursor-pointer font-Poppins 
text-white'>
                        <span className=''>
                            <img className='' src="https://corporx.themetags.com/assets/img/logo-white.png" alt="" />
                        </span>



                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                        {!open ? <BiMenuAltLeft className='border border-[#e80566] shadow rounded w-10 hover:border-[#6d28d9] duration-300 text-white' name={open ? 'close' : 'menu'}>

                        </BiMenuAltLeft> : <AiOutlineClose className='border border-[#e80566] shadow rounded w-10 hover:border-[#6d28d9] duration-300 text-white' />}




                    </div>



                    <ul onClick={() => setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:bg-[#1a2c79] bg-[#1a2c79] text-white  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 pr-6 transition-all duration-500 ease-in ${open ? 'top-14 ' : 'top-[-490px]'}`}>


                        <li>
                            <Link to='/' className='  md:ml-8 text-center text-xl md:my-0 my-7 md:pb-0 bg-[#e80566] md:bg-[#1a2c79]  mx-2 py-3 md:py-0 rounded-md duration-500 cursor-pointer block  text-white md:hover:text-white  hover:duration-300'>Home
                            </Link>
                        </li> <li>
                            <Link to='/' className='  md:ml-8 text-center text-xl md:my-0 my-7 md:pb-0 bg-[#e80566] md:bg-[#1a2c79]  mx-2 py-3 md:py-0 rounded-md duration-500 cursor-pointer block  text-white md:hover:text-white  hover:duration-300'>Shop
                            </Link>
                        </li> <li>
                            <Link to='/' className='  md:ml-8 text-center text-xl md:my-0 my-7 md:pb-0 bg-[#e80566] md:bg-[#1a2c79]  mx-2 py-3 md:py-0 rounded-md duration-500 cursor-pointer block  text-white md:hover:text-white  hover:duration-300 '>Element
                            </Link>
                        </li>



                        <li>
                            <Link to='/cart' className='relative'>
                                <BsHandbag className='ml-6 ' size={25} />
                                <span className='absolute rounded-full h-6 w-6 flex justify-center items-center border border-red-500 top-[-10px] left-8 bg-red-600 text-white'>{porductData.length}</span>
                            </Link>
                        </li>

                        <li className='flex items-center'>
                            {
                                userInfo ? <Link to='/login'><img className='h-8 w-8 rounded-full ml-6 mt-6 lg:mt-0' src={userInfo?.image} alt="" /></Link>
                                    : <Link to='/login'>
                                        <img className='h-8 w-8 rounded-full border ml-6' src="https://img.freepik.com/free-icon/user_318-563642.jpg?size=338&ext=jpg&ga=GA1.2.1166836568.1647150580&semt=ais" alt="" />
                                    </Link>
                            }

                            <div className='mt-8 lg:mt-0'> {userInfo && <p className='font-Edu text-red-500 ml-6 underline'>{userInfo.name}</p>}</div>
                        </li>









                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;