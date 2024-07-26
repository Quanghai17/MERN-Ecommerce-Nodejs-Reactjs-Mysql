import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../page/Home.jsx";
import Layouts from "../layout/index";
import Login from "../page/Login";
import AllOrder from "../page/order/AllOrder.jsx";
import AllProduct from "../page/product/AllProduct.jsx";
import CreateProduct from "../page/product/CreateProduct.jsx";
import AllCategory from "../page/category/AllCategory.jsx";
import CreateCategory from "../page/category/CreateCategory.jsx";
import UpdateProduct from "../page/product/UpdateProduct.jsx";
import UpdateCategory from "../page/category/UpdateCategory.jsx";


const routes = createBrowserRouter([
    { 
        path: "/", 
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Layouts><Home/></Layouts>
            },
            {
                path: "/category",
                element: <Layouts><AllCategory/></Layouts>,
            },
            {
                path: "/category/createCategory",
                element: <Layouts><CreateCategory/></Layouts>,
            },
            {
                path: "/category/updateCategory/:id",
                element: <Layouts><UpdateCategory/></Layouts>,
            },
            {
                path: "/product",
                element: <Layouts><AllProduct/></Layouts>,
            },
            {
                path: "/product/createProduct",
                element: <Layouts><CreateProduct/></Layouts>,
            },
            {
                path: "/product/updateProduct/:id",
                element: <Layouts><UpdateProduct/></Layouts>,
            },
            {
                path: "/order",
                element: <Layouts><AllOrder/></Layouts>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
      },
]);

export default routes;  