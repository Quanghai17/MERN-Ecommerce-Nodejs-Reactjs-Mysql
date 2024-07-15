import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import displayINRCurrency from '../helpers/displayCurrency';
import createOrder from "../helpers/orderHelpres";

const Checkout = () => {
    const [products, setProduct] = useState([])
    const [data, setData] = useState('')

    const handleOnChange = (e) => {
        setData(e.target.value);
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

    const totalQty = products.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0)
    const totalPrice = products.reduce((preve, curr) => preve + (curr.quantity * curr?.Product?.price), 0)

    const handlePlaceOrder = async () => {
        try {
            const orderData = products.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                price: item?.Product?.price,
            }));
            await createOrder(orderData , data);

            toast.success('Thanh toán thành công');
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-center text-lg my-3'>
                    <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4 bg-white rounded'>
                        <table className="table-fixed w-full">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index}>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            {index + 1}
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            {product?.Product?.name}
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px] flex justify-center">
                                            <img
                                                src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/${product?.Product?.imageUrl}`}
                                                alt={product.name}
                                                style={{ width: '70px', height: 'auto' }}
                                            />
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            {product.quantity}
                                        </td>
                                        <td className="pt-[14px] pb-[16px] sm:text-[14px]">
                                            {displayINRCurrency(product?.Product?.price)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4 '>
                        <div className='w-full max-w-3xl'>
                            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden bg-white rounded p-4 text-start">
                                <form encType="multipart/form-data">
                                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                        <div className="sm:col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ nhận hàng</label>
                                            <input
                                                type="text"
                                                name="address"
                                                onChange={handleOnChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="xã(phường), quận (huyện), tỉnh"
                                                required />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                                            <input
                                                type="text"
                                                name="description"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="09876543"
                                                required />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ghi chú</label>
                                            <textarea
                                                name="body"
                                                rows="8"
                                                className="block p-2.5 w-full text-sm text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Giới thiệu sản phẩm"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                            <div className='h-36 bg-white'>
                                <h2 className='text-white bg-blue-400 px-4 py-1'>Giỏ hàng</h2>
                                <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                    <p>Tổng sản phẩm</p>
                                    <p>{totalQty}</p>
                                </div>
                                <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                                    <p>Tổng số tiền</p>
                                    <p>{displayINRCurrency(totalPrice)}</p>
                                </div>
                                    <button onClick={handlePlaceOrder} className='bg-blue-600 p-2 text-white w-full mt-2'>Thanh toán</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout