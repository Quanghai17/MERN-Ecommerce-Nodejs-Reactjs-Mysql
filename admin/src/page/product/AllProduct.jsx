//import React from 'react'
import { Link } from "react-router-dom";
import Checkbox from "../../components/checkbox/index";
import { useEffect, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { toast } from 'react-hot-toast';
import axios from 'axios';

const AllProduct = () => {

    const [products, setProducts] = useState([]);

    const getAllProduct = async () => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/products`

        try {
            const response = await axios({
                method: "GET",
                url: URL,
                withCredentials: true,
            })

            const dataProduct = response.data.data;
          //  console.log(dataProduct);
            setProducts(dataProduct);
        } catch (error) {
            toast.error(error?.dataResponse?.data?.message)
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    return (
        <div>
            <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
                <div className='!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none '>
                    <div className='w-full sm:overflow-auto p-4'>
                        <header className="relative flex items-center justify-between">
                            <div className="text-xl font-bold text-navy-700 dark:text-white">
                                Danh sách sản phẩm
                            </div>
                            <Link to={"/product/createProduct"}>
                                <button className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-500 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                                    Thêm sản phẩm
                                </button>
                            </Link>
                        </header>
                        <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                            <table className="w-full" color="gray-500">
                                <thead>
                                    <tr>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">

                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                STT
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Tên Sản Phẩm
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Hình ảnh
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Giá tiền
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Số lượng bán
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Tồn kho
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Danh mục
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Thao tác
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <Checkbox />
                                                </div>
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {index + 1}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {product.name}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                <img
                                                    src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/${product.imageUrl}`}
                                                    alt={product.name}
                                                    style={{ width: '70px', height: 'auto' }}
                                                />
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {product.price}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {product.sellNumber}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {product.stock}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {product.Category?.name}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                <MdModeEditOutline className="h-5 w-5"/>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProduct