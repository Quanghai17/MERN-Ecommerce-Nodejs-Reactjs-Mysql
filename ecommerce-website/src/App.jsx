import routes from "./routes";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./common/components/ScrollToTop";
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import Context from "./context/index"
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import { Toaster } from 'react-hot-toast'

function App() {
  const dispatch = useDispatch()
  const userDetail = async () => {
    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/userDetail`

    try {
      const dataResponse = await axios({
        method: "GET",
        url: URL,
        withCredentials: true,
      })
      const dataApi = dataResponse.data;
      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data))
      }
      //console.log("user detail", dataApi)
    } catch (error) {
      toast.error(error?.dataResponse?.data?.message)
    }
  }

  useEffect(() => {
    userDetail()
  }, [])
  return (
    <>
    <Toaster />
      < Context.Provider value={{ userDetail }}>
      <Router>
        <React.Fragment>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
              >
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={<childRoute.element />}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
          <ScrollToTop />
        </React.Fragment>
      </Router>
    </Context.Provider>
    </>
  )
}

export default App
