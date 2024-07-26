import { toast } from 'react-hot-toast';
import axios from 'axios';

const removeFromCart = async (id) => {
    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/deleteProductCart/${id}`;
    try {
        await axios.delete(URL, {
            withCredentials: true,
        });
        toast.success('Xóa sản phẩm thành công');
    } catch (error) {
        console.error(error)
        toast.error('Xóa sản phẩm thất bại');
    }
}

export default removeFromCart