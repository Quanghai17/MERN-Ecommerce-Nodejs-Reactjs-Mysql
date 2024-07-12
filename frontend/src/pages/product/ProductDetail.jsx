import { useState, useEffect } from 'react';
//import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import displayINRCurrency from '../../helpers/displayCurrency';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])

  const getProduct = async () => {
    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/getProductDetail/${id}`

    try {
      const response = await axios({
        method: "GET",
        url: URL,
        withCredentials: true,
      })

      const dataProduct = response.data.data;
      console.log(dataProduct);
      setProduct(dataProduct);
    } catch (error) {
      toast.error(error?.dataResponse?.data?.message)
    }
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className='container mx-auto p-4'>
      <div className='min-h-[200px] flex flex-col lg:flex-row gap-4'>
        {/***product Image */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 relative p-2'>
            <img src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/${product.imageUrl}`} className='h-full w-full object-scale-down mix-blend-multiply' />
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-2xl lg:text-4xl font-medium'>{product?.name}</h2>
            <p className='capitalize text-slate-400'>{product?.Category?.name}</p>
            <div className='text-yellow-400 flex items-center gap-1'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
              <p className='text-blue-600'>{displayINRCurrency(product.price)}</p>
            </div>
            <div className='flex items-center gap-3 my-2'>
              <button className='border-2 border-blue-600 rounded px-3 py-1 min-w-[120px] text-blue-600 font-medium hover:bg-blue-600 hover:text-white'>Buy</button>
              <button className='border-2 border-blue-600 rounded px-3 py-1 min-w-[120px] font-medium text-white bg-blue-600 hover:text-blue-600 hover:bg-white'>Add To Cart</button>
            </div>
            <div>
              <p className='text-slate-600 font-medium my-1'>Description : </p>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail