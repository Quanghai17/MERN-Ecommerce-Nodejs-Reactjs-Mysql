import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const CreateProduct = () => {
    const [data, setData] = useState({
        name: "",
        productImage: null,
        price: "",
        description: "",
        body: "",
        stock: "",
        sellNumber: "",
        categoryId: "",
    });

    const [categories, setCategories] = useState([])

    const getAllCategories = async () => {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/categories`
        try {
            const response = await axios({
                method: "GET",
                url: URL,
                withCredentials: true,
            })
            const dataCategories = response.data.data;
            setCategories(dataCategories);
        } catch (error) {
            toast.error(error?.dataResponse?.data?.message)
        }
    }


    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if (name === 'productImage') {
            setData((prev) => ({
                ...prev,
                [name]: e.target.files[0] // Assign file object
            }));
        } else {
            setData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('productImage', data.productImage); // File object
        formData.append('price', data.price);
        formData.append('description', data.description);
        formData.append('body', data.body);
        formData.append('stock', data.stock);
        formData.append('sellNumber', data.sellNumber);
        formData.append('categoryId', data.categoryId);

        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/createProduct`;

        try {
            const response = await axios.post(URL, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success(response.data.message);

            if (response.data.success) {
                navigate('/product');
            }

        } catch (error) {
            toast.error(error?.response?.data?.message);
            //console.log(error);
        }
    };

    useEffect(() => {
        getAllCategories()
    }, [])
    return (
        <div className='grid place-items-center'>
            <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
                <div className='!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none '>
                    <div className='w-full sm:overflow-auto p-4'>
                        <header className="relative flex items-center justify-between">
                            <Link to={"/product"}>
                                <button className="linear rounded-[20px] bg-brand-600 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-500 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                                    Danh sách sản phẩm
                                </button>
                            </Link>
                        </header>
                        <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sản phẩm</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Tên sản phẩm"
                                            required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả sản phẩm</label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={data.description}
                                            onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Mô tả sản phẩm"
                                            required />
                                    </div>
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá bán</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={data.price}
                                            onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="$2999"
                                            required />
                                    </div>
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số lượng</label>
                                        <input
                                            type="number"
                                            name="stock"
                                            value={data.stock}
                                            onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder=""
                                            required />
                                    </div>
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hình ảnh</label>
                                        <input
                                            type="file"
                                            name="productImage"
                                            onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required />
                                    </div>
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số lượng bán ra</label>
                                        <input
                                            type="number"
                                            name="sellNumber"
                                            value={data.sellNumber}
                                            onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder=""
                                            required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Danh mục sản phẩm</label>
                                        <select id="category"
                                            name="categoryId"
                                            onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option selected="">Chọn danh mục</option>
                                            {categories.map((category, index) => (
                                                <option key={index} value={category.id}> {category.name} </option>
                                            ))}

                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giới thiệu sản phẩm</label>
                                        <textarea
                                            name="body"
                                            value={data.body}
                                            onChange={handleOnChange}
                                            rows="8"
                                            className="block p-2.5 w-full text-sm text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Giới thiệu sản phẩm"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        className="linear rounded-[20px] bg-brand-600 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-500 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
                                    >
                                        Tạo sản phẩm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;
