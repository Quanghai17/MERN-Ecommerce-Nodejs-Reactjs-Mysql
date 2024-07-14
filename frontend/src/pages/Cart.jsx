import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import displayINRCurrency from '../helpers/displayCurrency';

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

    const handleDelete = async (id) => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/deleteProductCart/${id}`;
        console.log('id', id)
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

    useEffect(() => {
        setLoading(true)
        getAllProduct()
        setLoading(false)
    }, [])

    return (
        <div className='container mx-auto'>
            <div className='text-center text-lg my-3'>
                {
                    data.length === 0 && !loading && (
                        <p className='bg-white py-5'>No Data</p>
                    )
                }
            </div>

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
                                <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' >-</button>
                                <span>{product?.quantity}</span>
                                <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded ' >+</button>
                            </div>
                        </div>
                    </div>
                )

                )
                }
            </div>
        </div>
    )
}

export default Cart