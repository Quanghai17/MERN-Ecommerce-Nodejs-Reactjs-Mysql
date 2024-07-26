import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import displayVNDCurrency from '../../helpers/displayCurrency';

const CheckoutCartItem = ({ item }) => {
    return (
        <div>
            <div className=" flex flex-row justify-between items-center ">
                <div className="flex items-center gap-6 ">
                    <div className="flex ">
                        <Link to={{ pathname: `/allProducts/${item.id}` }} key={item.id}>
                            <img
                                loading="lazy"
                                src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/${item?.Product?.imageUrl}`}
                                alt={item?.Product?.name}
                                className="w-14 h-14  "
                            />
                        </Link>
                    </div>
                    <div>
                        <p className="text-xs md:text-base md:absolute">{item?.Product?.name}</p>
                    </div>
                </div>

            </div>
            <div className="flex justify-end items-center ">
                <p className="text-gray-500">
                    {displayVNDCurrency(item?.Product?.price)} x
                    {item?.quantity}
                </p>
            </div>
        </div>
    )
}

CheckoutCartItem.propTypes = {
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

export default CheckoutCartItem