//import React from 'react';
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import DashIcon from "./icons/DashIcon";
import { MdOutlineShoppingCart, MdPerson } from "react-icons/md";
import { IoIosMedkit } from "react-icons/io";
import { TbCategory } from "react-icons/tb";

const Sidebar = ({ open, onClose }) => {
    return (
        <div
        className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
            open ? "translate-x-0" : "-translate-x-96"
          }`}
        >
            <span className="absolute top-4 right-4 block cursor-pointer xl:hidden"  onClick={onClose}>
                <HiX />
            </span>
            <div className={`mx-[56px] mt-[50px] flex items-center`}>
                <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
                    ECOMMERCE <span className="font-medium"></span>
                </div>
            </div>
            <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
            <ul className="mb-auto pt-1">
                <NavLink to={"/"} activeClassName="text-brand-500">
                    {({ isActive }) => (
                        <div className={`relative mb-3 flex hover:cursor-pointer ${isActive ? "text-brand-500" : "text-gray-600"}`}>
                            <li className="my-[3px] flex cursor-pointer items-center px-8">
                                <span className={`font-bold ${isActive ? "text-brand-500 dark:text-white" : "text-gray-600"}`}>
                                    <DashIcon />
                                </span>
                                <p className={`leading-1 ml-4 flex ${isActive ? "text-navy-700 font-bold" : "text-gray-600 font-medium"}`}>
                                    Trang chủ
                                </p>
                            </li>
                            {isActive && <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />}
                        </div>
                    )}
                </NavLink>
                <NavLink to={"/order"} activeClassName="text-brand-500">
                    {({ isActive }) => (
                        <div className={`relative mb-3 flex hover:cursor-pointer ${isActive ? "text-brand-500" : "text-gray-600"}`}>
                            <li className="my-[3px] flex cursor-pointer items-center px-8">
                                <span className={`font-medium ${isActive ? "text-brand-500" : "text-gray-600"}`}>
                                    <MdOutlineShoppingCart className="h-6 w-6" />
                                </span>
                                <p className={`leading-1 ml-4 flex  ${isActive ? "text-navy-700 font-bold" : "text-gray-600 font-medium"}`}>
                                    Đơn hàng
                                </p>
                            </li>
                            {isActive && <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />}
                        </div>
                    )}
                </NavLink>
                <NavLink to={"/category"} activeClassName="text-brand-500">
                    {({ isActive }) => (
                        <div className={`relative mb-3 flex hover:cursor-pointer ${isActive ? "text-brand-500" : "text-gray-600"}`}>
                            <li className="my-[3px] flex cursor-pointer items-center px-8">
                                <span className={`font-bold ${isActive ? "text-brand-500" : "text-gray-600"}`}>
                                    <TbCategory  className="h-6 w-6" />
                                </span>
                                <p className={`leading-1 ml-4 flex ${isActive ? "text-navy-700 font-bold" : "text-gray-600 font-medium"}`}>
                                    Danh mục<caption></caption>
                                </p>
                            </li>
                            {isActive && <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />}
                        </div>
                    )}
                </NavLink>
                <NavLink to={"/product"} activeClassName="text-brand-500">
                    {({ isActive }) => (
                        <div className={`relative mb-3 flex hover:cursor-pointer ${isActive ? "text-brand-500" : "text-gray-600"}`}>
                            <li className="my-[3px] flex cursor-pointer items-center px-8">
                                <span className={`font-bold ${isActive ? "text-brand-500" : "text-gray-600"}`}>
                                    <IoIosMedkit className="h-6 w-6" />
                                </span>
                                <p className={`leading-1 ml-4 flex ${isActive ? "text-navy-700 font-bold" : "text-gray-600 font-medium"}`}>
                                    Sản phẩm
                                </p>
                            </li>
                            {isActive && <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />}
                        </div>
                    )}
                </NavLink>
                <NavLink to={"/account"} activeClassName="text-brand-500">
                    {({ isActive }) => (
                        <div className={`relative mb-3 flex hover:cursor-pointer ${isActive ? "text-brand-500" : "text-gray-600"}`}>
                            <li className="my-[3px] flex cursor-pointer items-center px-8">
                                <span className={`font-bold ${isActive ? "text-brand-500" : "text-gray-600"}`}>
                                    <MdPerson className="h-6 w-6" />
                                </span>
                                <p className={`leading-1 ml-4 flex ${isActive ? "text-navy-700 font-bold" : "text-gray-600 font-medium"}`}>
                                    Tài khoản
                                </p>
                            </li>
                            {isActive && <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />}
                        </div>
                    )}
                </NavLink>
            </ul>
        </div>
    );
}

export default Sidebar;
