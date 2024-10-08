import axios from 'axios';
import { toast } from 'react-hot-toast';

const createOrder = async (items, shippingAddress) => {
    const URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/createOrder`;
    console.log("shippingAddress", shippingAddress);
    try {
        const response = await axios.post(URL, { items, shippingAddress }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || 'Error creating order');
        throw error;
    }
};

export default createOrder;