import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
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
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>

          <div>
            <Link to={"/cart"} className='text-2xl relative'>
              <span><FaShoppingCart /></span>
              <div className='bg-blue-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>1</p>
              </div>
            </Link>
          </div>

          <div>
            <Link to={"/login"} className='px-3 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-700'>Đăng nhập</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header