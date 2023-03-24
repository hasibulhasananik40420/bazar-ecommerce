import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Products from '../Components/Products'
import Header from './Header'

const Home = () => {
    const data = useLoaderData()
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data.data)
    }, [data])

    // console.log(data.data)
    return (
        <div className=''>
            <Header />
            <Products products={products} />
        </div>
    )
}

export default Home