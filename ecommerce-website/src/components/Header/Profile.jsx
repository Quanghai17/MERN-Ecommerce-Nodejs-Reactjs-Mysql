import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { setUserDetails } from '../../store/userSlice';

const Profile = () => {
  const user = useSelector(state => state?.user?.user);
  const [menuDisplay, setMenuDisplay] = useState(false)
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/userLogout`

    try {
      const response = await axios({
        method: "GET",
        url: URL,
        withCredentials: true,
      })
      const dataApi = response.data;
      setMenuDisplay(false);
      if (dataApi.success) {
        toast.success(dataApi.message)
        dispatch(setUserDetails(null))
      }
      // console.log("user detail", dataApi)
    } catch (error) {
      toast.error(error?.dataResponse?.data?.message)
    }
  }

  return (
    <div className="flex justify-between md:justify-around items-center md:gap-4 md:ml-4 ">
      <Link to="/wishlist">
        <IconButton
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <span
            className={`absolute ml-5 mb-5 px-1 rounded-full text-white text-sm bg-red-500`}
          >
            1
          </span>
          <svg
            className="hover:bg-red-500 rounded-full w-6 md:w-8 md:h-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </Link>

      <Link to="/cart">
        <IconButton
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <span
            className={`absolute ml-5 mb-5 px-1 rounded-full text-white text-sm bg-red-500`}
          >
            2
          </span>

          <svg
            className="hover:bg-red-500 rounded-full w-6 md:w-8 md:h-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 5H7L10 22H26"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>
      </Link>

      <IconButton
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <div className="relative group flex justify-center">
          {
            user?.id ? (
              <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(preve => !preve)}>
                <svg
                  className="hover:bg-red-500 rounded-full w-6 md:w-8 md:h-8"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <Link to={"/login"} className='px-3 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-700'>Đăng nhập</Link>
            )
          }
          {
            menuDisplay && (
              <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded text-black' >
                <nav>
                  <Link className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={() => setMenuDisplay(preve => !preve)}>Thông tin cá nhân</Link>
                </nav>
                <nav>
                  <div className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={handleLogout}>Đăng xuất</div>
                </nav>
              </div>
            )
          }
        </div>
      </IconButton>
    </div>
  )
}

export default Profile