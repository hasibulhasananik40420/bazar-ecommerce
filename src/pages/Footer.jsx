import React from 'react';
import { AiOutlineDribbble, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {


    return (
        <div className='bg-white'>
            <div className='max-w-7xl mx-auto p-12'>
                <div className='flex justify-evenly p-4 lg:p-0'>
                    <div>
                        <h1 className='lg:text-3xl text-xl font-Poppins  text-[#8d7c7c]'>Consulting Agency for Your Business</h1>
                        <p className='text-[#707070] pt-2'>Rapidiously engage fully tested e-commerce with progressive architectures.</p>
                    </div>
                    <div>
                        <button className='bg-[#1a2c79] my-6 py-3 px-4 rounded hover:bg-[#21358d] text-white  font-medium font-poppins  duration-500 lg:block hidden'>Contact With Us </button>
                    </div>
                </div>

            </div>


            <div className='bg-[#1a2c79] p-6'>
                <div className='pt-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-24'>
                    <div>
                        <img src="https://corporx.themetags.com/assets/img/logo-white.png" alt="" />


                        <div className='flex gap-5 pt-4 pb-2 cursor-pointer'>
                            <FaFacebookF className='bg-[#3b5999] w-8 h-8 p-2 rounded-full shadow-lg text-white  transform transition duration-500 hover:scale-110'></FaFacebookF>


                            <AiOutlineTwitter className='bg-[#1da1f2] w-8 h-8 p-2 rounded-full shadow-lg text-white  transform transition duration-500 hover:scale-110'></AiOutlineTwitter>
                            <AiOutlineYoutube className='bg-[#cd201f] w-8 h-8 p-2 rounded-full shadow-lg text-white  transform transition duration-500 hover:scale-110'></AiOutlineYoutube>

                            <AiOutlineDribbble className='bg-[#ea4c89] w-8 h-8 p-2 rounded-full shadow-lg text-white  transform transition duration-500 hover:scale-110'></AiOutlineDribbble>


                        </div>

                    </div>

                    <div>
                        <h1 className='text-3xl font-semibold font-Poppins text-white'>Company</h1>

                        <p className='text-gray-300 mt-4'>About Us</p>
                        <p className='text-gray-300 mt-2'>Careers</p>
                        <p className='text-gray-300 mt-2'>Customers</p>
                        <p className='text-gray-300 mt-2'>Community</p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-semibold font-Poppins text-white'>Resources</h1>

                        <p className='text-gray-300 mt-4'>Help</p>
                        <p className='text-gray-300 mt-2'>Events</p>
                        <p className='text-gray-300 mt-2'>Live sessions</p>
                        <p className='text-gray-300 mt-2'>
                            Open sources</p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-semibold font-Poppins text-white'>Support</h1>

                        <p className='text-gray-300 mt-4'>Help</p>
                        <p className='text-gray-300 mt-2'> </p>
                        <p className='text-gray-300 mt-2'>Network Status</p>
                        <p className='text-gray-300 mt-2'>Contact Support</p>
                    </div>


                </div>

                <div className=' '>
                    <h1 className=' border-t-2 text-center p-8 border-white font-Poppins text-gray-300'>Copyrights © 2021. All rights reserved by C.B.C.L</h1>
                </div>

            </div>
        </div>
    );
};

export default Footer;