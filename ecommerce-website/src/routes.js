import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

const routes = [
    {
        path: "/",
        element: Layout,
        children: [
            {path: "", element: Home},
            {path: "/product", element: Product}
        ]
    }
]

export default routes; 