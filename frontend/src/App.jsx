import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast';
import Context from "./context/index"
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

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
      // console.log("user detail", dataApi)
    } catch (error) {
      toast.error(error?.dataResponse?.data?.message)
    }
  }

  useEffect(() => {
    userDetail()
  }, [])
  return (
    <>
      < Context.Provider value={{userDetail}}>
        <Toaster />
        <div className="app">
          <Header />
          <main className='min-h-[calc(50vh-120px)] pt-16'>
            <Outlet />
          </main>
          <Footer />
        </div>
      </Context.Provider>
    </>
  )
}

export default App
