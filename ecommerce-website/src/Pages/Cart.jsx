import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ActiveLastBreadcrumb from "../common/components/Link";
import { Link } from "react-router-dom";
import WhiteButton from "../common/components/WhiteButton";
import RedButton from "../common/components/RedButton";
import displayVNDCurrency from '../helpers/displayCurrency';
import { IconButton } from "@mui/material"
import removeFromCart from '../helpers/removeFromCart';
import handleDecrease from '../helpers/handleDecrease';
import handleIncrease from '../helpers/handleIncrease';

const RemoveIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="9" fill="#DB4444" />
        <path
            d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg> 
);


const Cart = () => {
    const [data, setData] = useState([])

    const getAllProduct = async () => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/getProductCart`

        try {
            const response = await axios({
                method: "GET",
                url: URL,
                withCredentials: true,
            })

            const dataProduct = response.data.data;
            // console.log(dataProduct);
            setData(dataProduct);
        } catch (error) {
            toast.error(error?.dataResponse?.data?.message)
        }
    }

    const handleDelete = async ( id ) => {
        await removeFromCart( id );
        getAllProduct()
    }

    const handleDecreaseFunc = async ( id , quantity) => {
        await handleDecrease( id , quantity);
        getAllProduct()
    }

    const handleIncreaseFunc = async (id , quantity) => {
        await handleIncrease(id , quantity);
        getAllProduct()
      };

    useEffect(() => {
        getAllProduct()
    }, [])

    const totalPrice = data.reduce((preve, curr) => preve + (curr.quantity * curr?.Product?.price), 0)
    return (
        <div className="max-w-screen-lg mx-auto mt-48 flex flex-col gap-10">
            <ActiveLastBreadcrumb path="Trang chủ/Giỏ hàng" />
            <div className="flex flex-row justify-between items-center py-6 px-2 md:px-14 shadow rounded md:gap-24  ">
                <h2 className="text-base">Sản phẩm</h2>
                <h2 className="text-base ml-10">Giá</h2>
                <h2 className="text-base ">Số lượng</h2>
                <h2 className="text-base hidden md:flex">Thành tiền</h2>
            </div>

            {data.map((item, index) => (
                <div key={index}  className=" flex flex-row justify-between items-center py-2 md:py-6 px-2 md:pr-12 md:pl-4 shadow rounded gap-4 md:gap-16  ">
                    <div className="flex items-center md:gap-4">
                        <div className="flex w-28">
                            <IconButton className="absolute -top-4" onClick={() => handleDelete(item.id)}>
                                <RemoveIcon />
                            </IconButton>
                            <Link>
                                <img
                                    loading="lazy"
                                    src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/${item?.Product?.imageUrl}`}
                                    alt={item?.Product?.name}
                                    className="w-16 h-16"
                                />
                            </Link>
                        </div>
                        <p className="hidden lg:flex text-xs md:text-base ">
                            {item?.Product?.name}
                        </p>
                    </div>
                    <div className="flex items-center ">
                        <p className="text-gray-500">
                            {displayVNDCurrency(item?.Product?.price)}
                        </p>
                    </div>
                    <div className="flex items-center border-2 border-gray-300  rounded px-2 py-1  mr-2 gap-3">
                        <p className="text-gray-500">{item.quantity}</p>

                        <div className="flex flex-col items-center justify-center ">
                            <button
                                className="px-1 rounded-full hover:bg-gray-200 text-gray-400 "
                            onClick={() => handleIncreaseFunc (item?.Product?.id, item?.quantity)}
                            >
                                +
                            </button>
                            <button
                                className="px-1 rounded-full hover:bg-gray-200 text-gray-400 "
                                onClick={() => handleDecreaseFunc (item?.Product?.id, item?.quantity)}
                            >
                                -
                            </button>
                        </div>
                    </div>
                    <div className="items-center hidden md:flex">
                        <p className="text-gray-500"> { }
                            {displayVNDCurrency(item?.Product?.price * item.quantity)}
                        </p>
                    </div>
                </div>
            ))}

            <div className="flex justify-between items-center mt-2">
                <Link to="..">
                    <WhiteButton name="Quay trở lại" />
                </Link>

                <WhiteButton name="Cập nhật giỏ hàng" />
            </div>
            <div className="flex items-center mt-4 md:flex-row gap-8 flex-col justify-end ">
                <div className="flex justify-between flex-col gap-6  border py-8 px-6 md:w-[470px]">
                    <p className="text-xl font-semibold">Tổng đơn hàng</p>
                    <div className="flex justify-between mt-4 border-b">
                        <p className="text-xl">Tổng tiền:</p>
                        <p className="text-xl">{displayVNDCurrency(totalPrice)}</p>
                    </div>
                    <div className="flex justify-between mt-4 border-b">
                        <p className="text-xl">Tiền:</p>
                        <p className="text-xl">{displayVNDCurrency(totalPrice)}</p>
                    </div>
                    <div className="flex justify-between mt-4 border-b">
                        <p className="text-xl">Vận chuyển:</p>
                        <p className="text-xl">free ship</p>
                    </div>{" "}
                    <div className="mx-10">
                        <Link to="/checkout">
                            <RedButton name="Thanh toán" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart