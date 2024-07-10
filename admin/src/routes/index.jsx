import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../page/Home.jsx";
import Layouts from "../layout/index";
import Login from "../page/Login";
import Order from "../page/Order.jsx";
import AllProduct from "../page/product/AllProduct.jsx";
import CreateProduct from "../page/product/CreateProduct.jsx";
import AllCategory from "../page/category/AllCategory.jsx";
import CreateCategory from "../page/category/CreateCategory.jsx";

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
                path: "/product",
                element: <Layouts><AllProduct/></Layouts>,
            },
            {
                path: "/product/createProduct",
                element: <Layouts><CreateProduct/></Layouts>,
            },
            {
                path: "/order",
                element: <Layouts><Order/></Layouts>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
      },
]);

export default routes;  