import './App.css'
import { Outlet, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import Context from "./context/index";
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

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
      } else {
        navigate('/login');
      }
      // console.log("user detail", dataApi)
    } catch (error) {
      toast.error(error?.dataResponse?.data?.message)
      navigate('/login');
    }
  }

  useEffect(() => {
    userDetail()
  }, [])

  return (
    <>
      < Context.Provider value={{ userDetail }}>
        <Toaster />
        <main >
          <Outlet />
        </main>
      </Context.Provider>
    </>
  )
}

export default App
