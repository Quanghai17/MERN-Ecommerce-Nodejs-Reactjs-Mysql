import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import apple from "./apple.png";
import phoneImage from '../../assets/phone.png';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Row1 = () => {
    const [categories, setCategories] = useState([]);

    const getAllCategories = async () => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/categories`
        try {
            const response = await axios({
                method: "GET",
                url: URL,
                withCredentials: true,
            })

            const dataCategories = response.data.data;
            setCategories(dataCategories);

        } catch (error) {
            toast.error(error?.dataResponse?.data?.message)
        }
    }

    useEffect(() => {
        getAllCategories();
    },[])


  return (
    <div className="flex flex-row ">
      {/* Left Sidebar */}
      <div className=" text-gray-700 w-64 flex-shrink-0 hidden xl:block">
        <nav className="py-6">
          <ul>
          {categories.map((category, index) => (
                <li key={index} className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
                    <Link to="/allProducts">
                        {category.name}
                    </Link>
                </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Vertical Line */}
      <div className="border-l border-gray-300 hidden xl:block"></div>

      {/* Main Content */}
      <div
        className="flex xl:my-10 xl:ml-10 xl:gap-16 items-center jusify-between flex-col-reverse 
      md:flex-row  md:h-96 bg-black text-white w-full "
      >
        <div className="flex flex-col md:max-w-72 gap-5 items-center md:items-start justify-center md:ml-16">
          <div className="max-w-72 flex jusify-center items-center gap-6">
            <img src={apple} alt="apple" />
            <h1 className="text-lg">iPhone 14 Series</h1>
          </div>
          <h2 className="text-2xl md:text-5xl leading-10">
          Up to 10% off Voucher
          </h2>
          <Link to="/allProducts">
            <button className="mb-8 md:mb-0 flex gap-2 underline underline-offset-8 py-2 px-6 focus:underline-offset-2  ease-in-out  duration-300 transform hover:translate-x-4">
              <span>Mua ngay</span>
              <svg
                className="mt-1 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className=" relative overflow-hidden mt-4 ">
          <div className="transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
            <Link to="/allProducts">
              <img
                src={phoneImage}
                loading="lazy"
                className="transition-transform duration-300 transform translate-y-4 hover:translate-y-0 hover:scale-102 hover:motion-safe:animate-pulse"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Row1