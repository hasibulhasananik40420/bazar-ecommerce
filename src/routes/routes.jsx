import { createBrowserRouter } from "react-router-dom"
import { ProductsData } from "../api/Api"
import Cart from "../Components/Cart"
import Login from "../Components/Login"
import Product from "../Components/Product"
import Main from "../main/Main"
import Home from "../pages/Home"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: ProductsData
            },
            {
                path: "/product/:id",
                element: <Product />
            },
             {
                path: "/cart",
                element: <Cart />
            },

            {
                path: "/login",
                element: <Login />
            },
            // {
            //     path: "/singup",
            //     element: <Singup />
            // }

        ]
    }







])

export default routes