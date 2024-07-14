import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ProductDetail from '../pages/product/ProductDetail'
import Cart from '../pages/Cart'

const routes = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children : [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "product/:id",
                element: <ProductDetail/>
            },
            {
                path: "cart",
                element: <Cart/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path : "sign-up",
                element: <SignUp/>
            }
        ]
    }
])

export default routes