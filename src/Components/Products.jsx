import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({ products }) => {
    // console.log(products)
    return (
        <div className='py-10 mt-8'>

            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-2xl bg-black text-white py-2 text-center w-80 rounded'>Shopping everyday</h1>
                <span className='w-20 h-[3px] bg-black mt-3'></span>
                <p className='w-3/5 text-center text-gray-600 mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere exercitationem numquam, in porro adipisci repellat suscipit fuga atque asperiores nobis repellendus</p>
            </div>
            {/* products card */}
            <div className='mx-20 grid lg:grid-cols-4 grid-cols-1  gap-10 mt-20'>
                {
                    products.map(product => <ProductsCard product={product} key={product._id} />)
                }
            </div>

        </div>
    )
}

export default Products