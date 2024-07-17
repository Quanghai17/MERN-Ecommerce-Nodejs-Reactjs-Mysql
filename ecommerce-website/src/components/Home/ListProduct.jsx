import { useEffect, useState } from 'react'
import RedTitle from "../../common/components/RedTitle";
import Arrows from "../../common/components/Arrows";
import ViewAll from "../../common/components/ViewAll";
import { Grid } from "@mui/material";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import ProductItem from '../../common/components/ProductItem';

const ListProduct = () => {
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
        <>
            <div className="mx-2 xl:mx-0 my-12">
                <RedTitle title="Sản phẩm của chúng tôi" />
                <div className="flex justify-between items-center md:mr-6 md:mb-4">
                    <h2 className="text-xl md:text-3xl font-semibold ">
                        Danh sách sản phẩm
                    </h2>
                    <Arrows />
                </div>
                <div className="relative mt-10 flex flex-row gap-2 md:gap-12 transition-transform duration-300 transform ">
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >
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
                    </Grid>
                </div>
            </div>
            <div className=" flex justify-center">
                <ViewAll name="Tất cả sản phẩm" />
            </div>
        </>
    )
}

export default ListProduct