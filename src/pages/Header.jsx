import React from 'react'
import image from '../assets/bucketgirl.png'
const Header = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/93tCHxD/slider-new.jpg')] lg:h-[100vh] bg-cover bg-no-repeat lg:bg-center	mt-12">

      <div className='lg:w-2/4 w-full lg:pt-48 pt-20 pl-20 lg:pb-0 pb-12'>
        <h1 className='lg:text-2xl text-xl font-Edu font-bold'>Spring-Summer 2023</h1>
        <h1 className='lg:text-5xl text-2xl font-Edu font-bold mt-3'>FLASH SALE OF 70%</h1>
        <p className='font-semibold font-Edu text-gray-500 mt-3'> Veniam corrupti veritatis neque nostrum doloribus maiores, esse ratione, expedita autem molestias voluptatem harum aperiam iure numquam culpa!</p>

        <button className='font-Edu font-bold px-6 py-[7px] border-2 border-[#222222] text-[#222222] rounded-full mt-6 '>Shop Now</button>

      </div>

    </div>
  )
}

export default Header