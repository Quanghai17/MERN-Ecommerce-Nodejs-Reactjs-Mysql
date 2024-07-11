import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Context from '../context'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import displayINRCurrency from '../helpers/displayCurrency'

const ListProduct = () => {
    const [data, setData] = useState([])
    const scrollElement = useRef()

    const getListProduct = async () => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/products`

        try {
            const response = await axios({
                method: "GET",
                url: URL,
                withCredentials: true,
            })

            const dataProduct = response.data.data;
            console.log(dataProduct);
            setData(dataProduct);
        } catch (error) {
            toast.error(error?.dataResponse?.data?.message)
        }
    }

    useEffect(() => {
        getListProduct()
    }, [])

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 300
    }
    const scrollLeft = () => {
        scrollElement.current.scrollLeft -= 300
    }

    return (
        <div className='container mx-auto px-4 my-6 relative'>
            <h2 className='text-2xl font-semibold py-4'>San pham</h2>
            <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>
                <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft /></button>
                <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight /></button>
                {
                    data.map((product, index) => (
                        <Link className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex' key={index}>
                            <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]'>
                                <img src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/${product.imageUrl}`} className='object-scale-down h-full hover:scale-110 transition-all' />
                            </div>
                            <div className='p-4 grid'>
                                <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black'>{product?.name}</h2>
                                <p className='capitalize text-slate-500'>{product.Category?.name}</p>
                                <div className='flex gap-3'>
                                    <p className='text-red-600 font-medium'>{displayINRCurrency(product?.price)}</p>
                                    <p className='text-slate-500'>{product?.stock}</p>
                                </div>
                                <button className='text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-0.5 rounded-full'>Thêm vào giỏ hàng</button>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ListProduct