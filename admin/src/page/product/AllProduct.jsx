//import React from 'react'
import { Link } from "react-router-dom";
import Checkbox from "../../components/checkbox/index";

const AllProduct = () => {
    return (
        <div>
            <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
                <div className='!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none '>
                    <div className='w-full sm:overflow-auto p-4'>
                        <header className="relative flex items-center justify-between">
                            <div className="text-xl font-bold text-navy-700 dark:text-white">
                                Danh sách sản phẩm
                            </div>
                            <Link to={"/createProduct"}>
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
                                                Thao tác
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <Checkbox />
                                            </div>
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            1
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            Tai Nghe AirPod 
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            1
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            1000
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            100
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            10
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            1
                                        </td>
                                    </tr>
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