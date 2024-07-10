import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const CreateCategory = () => {
    const [data, setData] = useState({
        name: "",
        categoryImage: null,
        description: "",
    });

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if (name === 'categoryImage') {
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
        formData.append('categoryImage', data.categoryImage); // File object
        formData.append('description', data.description);

        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/admin/createCategory`;

        try {
            const response = await axios.post(URL, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            toast.success(response.data.message);

            if (response.data.success) {
                navigate('/category');
            }

        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
  return (
    <div>
        <div className='grid place-items-center'>
            <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
                <div className='!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none '>
                    <div className='w-full sm:overflow-auto p-4'>
                        <header className="relative flex items-center justify-between">
                            <Link to={"/category"}>
                                <button className="linear rounded-[20px] bg-brand-600 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-500 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                                    Danh sách danh mục
                                </button>
                            </Link>
                        </header>
                        <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên danh mục</label>
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
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={data.description}
                                            onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Mô tả sản phẩm"
                                            required />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hình ảnh</label>
                                        <input
                                            type="file"
                                            name="categoryImage"
                                            onChange={handleOnChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required />
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button
                                        type="submit"
                                        className="linear rounded-[20px] bg-brand-600 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-500 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
                                    >
                                        Tạo danh mục
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateCategory