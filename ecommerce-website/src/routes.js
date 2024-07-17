import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

const routes = [
    {
        path: "/",
        element: Layout,
        children: [
            {path: "", element: Home},
            {path: "/product", element: Product},
            {path: "/about", element: About},
            {path: "/contact", element: Contact},
            {path: "/login", element: LogIn},
            {path: "/signUp", element: SignUp}
        ]
    }
]

export default routes; 