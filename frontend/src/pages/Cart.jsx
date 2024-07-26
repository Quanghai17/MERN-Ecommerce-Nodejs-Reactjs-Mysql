import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import displayINRCurrency from '../helpers/displayCurrency';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

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

    const increaseQty = async (id, qty) => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/updateProductCart`;

        //  console.log("data", id, qty)
        try {
            await axios.post(URL, { productId: id, quantity: qty + 1 }, {
                withCredentials: true,
            });

            toast.success('Sửa phẩm thành công');
            getAllProduct();
        } catch (error) {
            console.error(error)
            toast.error('Sửa sản phẩm thất bại');
        }
    }

    const decraseQty = async (id, qty) => {
        if (qty >= 2) {

            const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/updateProductCart`;

            // console.log("data", id, qty)
            try {
                await axios.post(URL, { productId: id, quantity: qty - 1 }, {
                    withCredentials: true,
                });

                toast.success('Sửa phẩm thành công');
                getAllProduct();
            } catch (error) {
                console.error(error)
                toast.error('Sửa sản phẩm thất bại');
            }
        } else {
            toast.error('Số lượng sản phẩm không cho phép');
        }
    }

    const handleDelete = async (id) => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/deleteProductCart/${id}`;
        try {
            await axios.delete(URL, {
                withCredentials: true,
            });

            toast.success('Xóa sản phẩm thành công');
            getAllProduct();
        } catch (error) {
            console.error(error)
            toast.error('Xóa sản phẩm thất bại');
        }
    }

    const handleDeleteAll = async () => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/deleteAllProduct`;
        try {
            await axios.delete(URL, {
                withCredentials: true,
            });

            toast.success('Xóa tất cả sản phẩm thành công');
            getAllProduct();
        } catch (error) {
            console.error(error)
            toast.error('Xóa tất cả sản phẩm thất bại');
        }
    }

    useEffect(() => {
        setLoading(true)
        getAllProduct()
        setLoading(false)
    }, [])

    const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0)
    const totalPrice = data.reduce((preve, curr) => preve + (curr.quantity * curr?.Product?.price), 0)

    return (
        <div className='container mx-auto'>
            <div className='text-center text-lg my-3'>
                {
                    data.length === 0 && !loading && (
                        <p className='bg-white py-5'>Chưa có sản phẩm nào</p>
                    )
                }
            </div> 

            <div className='flex flex-col lg:flex-row gap-10 lg:justify-between p-4'>
                <div className='w-full max-w-3xl'>
                    {data.map((product, index) => (
                        <div key={index} className='w-full bg-white h-32 my-2 border border-slate-300  rounded grid grid-cols-[128px,1fr]'>
                            <div className='w-32 h-32 bg-slate-200'>
                                <img src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/${product?.Product?.imageUrl}`} className='w-full h-full object-scale-down mix-blend-multiply' />
                            </div>
                            <div className='px-4 py-2 relative'>

                                <div className='absolute right-0 text-red-600 rounded-full p-2 hover:bg-red-600 hover:text-white cursor-pointer'
                                    onClick={() => handleDelete(product.id)} >
                                    <MdDelete />
                                </div>

                                <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{product?.Product?.name}</h2>
                                <div className='flex items-center justify-between'>
                                    <p className='text-red-600 font-medium text-lg'>{displayINRCurrency(product?.Product?.price)}</p>
                                    <p className='text-slate-600 font-semibold text-lg'>{displayINRCurrency(product?.Product?.price * product?.quantity)}</p>
                                </div>
                                <div className='flex items-center gap-3 mt-1'>
                                    <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded '
                                        onClick={() => decraseQty(product?.Product?.id, product?.quantity)} >-</button>
                                    <span>{product?.quantity}</span>
                                    <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded '
                                        onClick={() => increaseQty(product?.Product?.id, product?.quantity)} >+</button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {
                        data.length === 0 ? (
                            <div className=' border border-slate-300 animate-pulse'>

                            </div>
                        ) : (
                            <div className='h-12 flex flex-col items-end'>
                                <button className='bg-red-400 hover:bg-red-600 p-2 text-white w-30 m-2 rounded'
                                    onClick={() => handleDeleteAll()}
                                >Xóa tất cả</button>
                            </div>
                        )
                    }

                </div>

                <div className='mt-5 lg:mt-0 w-full max-w-sm'>
                    {
                        data.length === 0 ? (
                            <div className='h-360 border border-slate-300 animate-pulse'>

                            </div>
                        ) : (
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
                                <Link to={"/checkout"}>
                                    <button className='bg-blue-600 p-2 text-white w-full mt-2'>Thanh toán</button>
                                </Link>
                                
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart