import { createBrowserRouter } from 'react-router-dom'
import App from "../App"
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

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