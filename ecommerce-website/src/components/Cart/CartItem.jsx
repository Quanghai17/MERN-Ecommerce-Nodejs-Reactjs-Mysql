//import React from 'react
import { IconButton } from "@mui/material"
import { Link } from "react-router-dom";
import displayINRCurrency from '../../helpers/displayCurrency';
import removeFromCart from "../../helpers/removeFromCart";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const RemoveIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="9" fill="#DB4444" />
        <path
            d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg> 
);

const CartItem = ({ item }) => {

    const dispatch = useDispatch();

    const handleDelete = async ( id ) => {
        await removeFromCart( id , dispatch);

    }

    return (
        <div className=" flex flex-row justify-between items-center py-2 md:py-6 px-2 md:pr-12 md:pl-4 shadow rounded gap-4 md:gap-16  ">
            <div className="flex items-center md:gap-4">
                <div className="flex w-28">
                    <IconButton className="absolute -top-4"  onClick={() => handleDelete(item.id)}>
                        <RemoveIcon />
                    </IconButton>
                    <Link>
                        <img
                            loading="lazy"
                            src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/${item?.Product?.imageUrl}`}
                            alt={item?.Product?.name}
                            className="w-16 h-16"
                        />
                    </Link>
                </div>
                <p className="hidden lg:flex text-xs md:text-base ">
                {item?.Product?.name}
                    </p>
            </div>
            <div className="flex items-center ">
                <p className="text-gray-500">
                    {displayINRCurrency(item?.Product?.price)}
                </p>
            </div>
            <div className="flex items-center border-2 border-gray-300  rounded px-2 py-1  mr-2 gap-3">
                <p className="text-gray-500">{item.quantity}</p>

                <div className="flex flex-col items-center justify-center ">
                    <button
                        className="px-1 rounded-full hover:bg-gray-200 text-gray-400 "
                        // onClick={handleIncreaseFunc}
                    >
                        +
                    </button>
                    <button
                        className="px-1 rounded-full hover:bg-gray-200 text-gray-400 "
                        // onClick={handleDecreaseFunc}
                    >
                        -
                    </button>
                </div>
            </div>
            <div className="items-center hidden md:flex">
                <p className="text-gray-500"> {  }
                    { displayINRCurrency(item?.Product?.price * item.quantity)}
                </p>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        Product: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
};

export default CartItem