import { toast } from 'react-hot-toast';
import axios from 'axios';
import { addItem } from '../store/cartSlice';

const addToCart = async(e, id, dispatch) => {
    e?.stopPropagation()
    e?.preventDefault()

    
    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/addToCart`;

    try {
        const response = await axios.post(URL, { productId: id }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            },
        });

        // if(response.status === 200) {}
        if (response.status === 200) {
            dispatch(addItem({ productId: id, quantity: 1 }));
            toast.success(response.data.message);
        }

        return response.data.data
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}

export default addToCart;