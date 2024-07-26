//import React from 'react'
import ActiveLastBreadcrumb from "../common/components/Link";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import CheckoutCartItem from "../components/Checkout/CheckoutCartItem";
import displayVNDCurrency from '../helpers/displayCurrency';
import createOrder from "../helpers/orderHelpres";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        shippingAddress: "",
        phone: "",
    })
    const [products, setProduct] = useState([])

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

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
            setProduct(dataProduct);
        } catch (error) {
            toast.error(error?.dataResponse?.data?.message)
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    const navigate = useNavigate()
    const handlePlaceOrder = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        try {
            const orderData = products.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                price: item?.Product?.price,
            }));

          //  console.log("order", orderData)

            await createOrder(orderData, data);
            toast.success('Thanh toán thành công');
            navigate('/')

        } catch (error) {
            toast.error(error);
        }
    };

    // console.log("product", products)
    const totalPrice = products.reduce((preve, curr) => preve + (curr.quantity * curr?.Product?.price), 0)
    return (
        <div className="max-w-screen-lg mx-auto mt-36 md:mt-48 flex flex-col md:gap-10">
            <ActiveLastBreadcrumb path="Trang chủ/Thanh toán" />

            <form encType="multipart/form-data" onSubmit={handlePlaceOrder} >
                <div className="flex mt-4 md:flex-row flex-col gap-10 md:gap-40">
                    <div className="flex items-center justify-between  mt-4">
                        <div className="flex flex-col gap-4 md:gap-12">
                            <span className="text-2xl md:text-4xl font-medium">
                                Thông tin đặt hàng
                            </span>

                            <div className="flex flex-col gap-4 md:gap-8 w-[300px] md:w-[470px]">
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm md:text-base text-gray-400">
                                        Họ và tên(*):
                                    </span>
                                    <input
                                        type="text"
                                        placeholder=""
                                        required
                                        name="name"
                                        onChange={handleOnChange}
                                        className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-900 text-sm md:text-base focus:border outline-none focus:border-gray-300  "
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm md:text-base text-gray-400">
                                        Địa chỉ(*):
                                    </span>
                                    <input
                                        type="text"
                                        placeholder=""
                                        required
                                        name="shippingAddress"
                                        onChange={handleOnChange}
                                        className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-900 text-sm md:text-base focus:border outline-none focus:border-gray-300  "
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm md:text-base text-gray-400">
                                        Số điện thoại(*):
                                    </span>
                                    <input
                                        type="text"
                                        placeholder=""
                                        name="phone"
                                        onChange={handleOnChange}
                                        required
                                        className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-900 text-sm md:text-base focus:border outline-none focus:border-gray-300  "
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm md:text-base text-gray-400">
                                        Email :
                                    </span>
                                    <input
                                        type="email"
                                        placeholder=""
                                        required
                                        name="email"
                                        onChange={handleOnChange}
                                        className=" rounded bg-gray-100 bg-opacity-100 px-4 py-3 text-gray-900 text-sm md:text-base focus:border outline-none focus:border-gray-300  "
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between flex-col gap-4 md:gap-8  px-4 w-full md:w-[425px]">
                        {products.map((item, index) => (
                            <CheckoutCartItem
                                key={index}
                                item={item}
                            />
                        ))}
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between  border-b">
                                <p className="text-base">Thành tiền:</p>
                                <p className="text-base">{displayVNDCurrency(totalPrice)}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between  border-b">
                                <p className="text-base">Phí ship:</p>
                                <p className="text-base">miễn phí</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between  border-b">
                                <p className="text-base">Tổng đơn hàng:</p>
                                <p className="text-base">{displayVNDCurrency(totalPrice)}</p>
                            </div>
                        </div>
                        {/* Payment methods */}
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                                <p className="text-base">Hình thức thanh toán:</p>
                            </div>
                            <div className="flex justify-between">
                                <label>
                                    <input type="radio" name="paymentMethod" value="bank" className="m-2" />
                                    Chuyển khoản ngân hàng
                                </label>
                            </div>
                            <div className="flex justify-between">
                                <label>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cashOnDelivery"
                                        className="m-2"
                                    />
                                    Thanh toán khi nhận hàng
                                </label>
                            </div>
                        </div>

                        <div className="mr-auto">
                            <button type="submit" className="motion-safe:hover:animate-pulse text-sm md:text-base md:px-12 py-3 rounded px-6
                            bg-red-600 text-white hover:bg-red-500 transition-transform duration-100 transform hover:translate-y-[-4px] ">
                                Thanh toán
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout