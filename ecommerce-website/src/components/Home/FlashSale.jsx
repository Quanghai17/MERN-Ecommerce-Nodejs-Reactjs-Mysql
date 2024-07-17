import { useEffect, useState } from 'react'
import RedTitle from "../../common/components/RedTitle";
import ViewAll from "../../common/components/ViewAll";
import Arrows from "../../common/components/Arrows";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ProductItem from '../../common/components/ProductItem';

const FlashSale = () => {
    const [products, setProduct] = useState([])

    const getListProduct = async () => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/products`

        try {
            const response = await axios({
                method: "GET",
                url: URL,
                withCredentials: true,
            })

            const dataProduct = response.data.data;
            setProduct(dataProduct);
        } catch (error) {
            toast.error(error?.dataResponse?.data?.message)
        }
    }

    useEffect(() => {
        getListProduct()
    }, [])

    return (
        <div className=" p-4 ">
            <RedTitle title='Sản phẩm nổi bật' />
            <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
                <div className="flex gap-10 md:gap-20 flex-col md:flex-row ">
                    <h2 className="text-2xl md:text-3xl font-semibold ">
                        Danh sách sản phẩm
                    </h2>
                </div>
                <Arrows />
            </div>
            <div className="scrollbar relative  md:overflow-x-hidden hover:overflow-scroll  overflow-y-hidden flex justify-start items-center h-[500px] md:h-[400px] ">
                {products.map((item, index) => (
                    <ProductItem
                        key={item.id}
                        item={item}
                        index={index}
                        totalItems={products.length}
                        stars={3}
                        rates={4}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <ViewAll name='Tất cả sản phẩm' />
            </div>
            <hr className="mx-40 border-gray-300 md:mt-16" />
        </div>
    )
}

export default FlashSale