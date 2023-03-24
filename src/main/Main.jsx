import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../pages/Footer'

const Main = () => {
    return (
        <div>
            <Navbar />
            <ScrollRestoration />
            <Outlet />
            <Footer />

        </div>
    )
}

export default Main