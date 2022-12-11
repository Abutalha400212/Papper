import ProductCart from "../Components/Shared/ProductCart/ProductCart";
import ProductDetails from "../Components/Shared/ProductDetails/ProductDetails";
import CategoryWiseData from "../pages/Home/Category/CategoryWiseData";
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
                path:'/details/:id',
                loader:({params})=>fetch(`https://sample-apple-server.vercel.app/products/${params.id}`),
                element:<ProductDetails/>
            },
            {
                path:'/cart/:id',
                loader:({params})=>fetch(`https://sample-apple-server.vercel.app/products/${params.id}`),
                element:<ProductCart/>
            },
            {
                path:'/category/:id',
                loader:({params})=>fetch(`https://sample-apple-server.vercel.app/products/${params.id}`),
                element:<CategoryWiseData/>
            }
        ]
    }
])

