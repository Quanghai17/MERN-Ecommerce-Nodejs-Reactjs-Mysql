import { Link } from "react-router-dom";
import Checkbox from "../../components/checkbox/index";
import { useEffect, useState } from "react";
import { MdDeleteOutline, MdModeEditOutline } from "react-icons/md";
import { toast } from 'react-hot-toast';
import axios from 'axios';

const AllOrder = () => {

    const [orders, setOrder] = useState([])

    const getAllOrder = async () => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/orders`

        try {
            const response = await axios({
                method: "GET",
                url: URL,
                withCredentials: true,
            })

            const dataOrder = response.data.data
            setOrder(dataOrder)

        } catch (error) {
            toast.error(error?.dataResponse?.data?.message)
        }
    }

    useEffect(() => {
        getAllOrder()
    }, [])

    const handleDelete = async (id) => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/deleteOrder/${id}`;

        try {
            await axios.delete(URL, {
                withCredentials: true,
            });

            toast.success('Xóa đơn hàng thành công');
            getAllOrder();
        } catch (error) {
            toast.error('Xóa đơn hàng thất bại');
        }
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    console.log("order", orders)
    return (
        <div>
            <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
                <div className='!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none '>
                    <div className='w-full sm:overflow-auto p-4'>
                        <header className="relative flex items-center justify-between">
                            <div className="text-xl font-bold text-navy-700 dark:text-white">
                                Danh sách đơn hàng
                            </div>
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
                                                Tên Khách hàng
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Email
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Số điện thoại
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Địa chỉ
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Trạng thái
                                            </div>
                                        </th>
                                        <th className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700">
                                            <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                                                Tổng tiền
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
                                    {orders.map((order, index) => (
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
                                                {order.name}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {order.email}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {order.phone}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {order.shippingAddress}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {order.status}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                {formatPrice(order.totalAmount)}
                                            </td>
                                            <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                                <div className="flex justify-center">
                                                    <Link to={`/product/updateProduct/${order.id}`}>
                                                        <MdModeEditOutline className="h-5 w-5" />
                                                    </Link>
                                                    <MdDeleteOutline className="h-5 w-5 cursor-pointer text-red-500" onClick={() => handleDelete(order.id)} />
                                                </div>
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

export default AllOrder