import { useState, useEffect } from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
 
const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const [menuDisplay, setMenuDisplay] = useState(false)
  const [countCart, setDataCountCart] = useState(0)
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, countCart);

  const getCountCart = async () => {
    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/getCountCart`

    try {
      const response = await axios({
        method: "GET",
        url: URL,
        withCredentials: true,
      })
      const countCart = response.data.data;
      setDataCountCart(countCart);
     // console.log("user detail", countCart) 
    } catch (error) {
      toast.error(error?.dataResponse?.data?.message)
    }
  }

  useEffect(() => {
    getCountCart()
  }, [])

  const handleLogout = async () => {
    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/userLogout`

    try {
      const response = await axios({
        method: "GET",
        url: URL,
        withCredentials: true,
      })
      const dataApi = response.data;
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
    <header className='h-26 shadow-md bg-white w-full z-40 fixed'>
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <Link to={"/"}>
          <Logo w={90} h={50} />
        </Link>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='Tìm kiếm sản phẩm...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        <div className="lg:flex items-center justify-between gap-4">
          <div className="relative group flex justify-center">
            {
              user?.id && (
                <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(preve => !preve)}>
                  <FaRegCircleUser />
                </div>
              )
            }

            {
              menuDisplay && (
                <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                  <nav>
                    {
                      user?.role === ROLE.ADMIN && (
                        <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={() => setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                      )
                    }

                    {
                      user?.role === ROLE.GENERAL && (
                        <Link className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={() => setMenuDisplay(preve => !preve)}>Thông tin cá nhân</Link>
                      )
                    }
                  </nav>
                </div>
              )
            }
          </div>


          <div>
            <Link to={"/cart"} className='text-2xl relative'>
              <span><FaShoppingCart /></span>
              <div className='bg-blue-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>{totalItems}</p>
              </div>
            </Link>
          </div>

          <div>
            {
              user?.id ? (
                <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-blue-700'>Đăng xuất</button>
              )
                : (
                  <Link to={"/login"} className='px-3 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-700'>Đăng nhập</Link>
                )
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header