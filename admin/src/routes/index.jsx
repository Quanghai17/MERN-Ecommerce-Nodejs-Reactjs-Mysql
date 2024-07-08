import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "../page/Home.jsx";
import Layouts from "../layout/index";
import Login from "../page/Login";

const routes = createBrowserRouter([
    { 
        path: "/", 
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Layouts><Home/></Layouts>
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
      },
]);

export default routes;  