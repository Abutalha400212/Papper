import ProductCart from "../Components/Shared/ProductCart/ProductCart";
import ProductDetails from "../Components/Shared/ProductDetails/ProductDetails";
import Home from "../pages/Home/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:'/detail',
                element:<ProductDetails/>
            },
            {
                path:'/cart',
                element:<ProductCart/>
            },
        ]
    }
])

