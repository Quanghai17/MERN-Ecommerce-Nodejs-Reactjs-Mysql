import { toast } from 'react-hot-toast';
import axios from 'axios';

const handleDecrease = async (id, qty) => {
    if (qty >= 2) {
        const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/updateProductCart`;
        // console.log("data", id, qty)
        try {
            await axios.post(URL, { productId: id, quantity: qty - 1 }, {
                withCredentials: true,
            });
            toast.success('Sửa phẩm thành công');
        } catch (error) {
            console.error(error)
            toast.error('Sửa sản phẩm thất bại');
        }
    } else {
        toast.error('Số lượng sản phẩm không cho phép');
    }
}

export default handleDecrease