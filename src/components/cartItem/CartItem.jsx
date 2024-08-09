import PropTypes from 'prop-types';
import { useGetDishByIdQuery } from "../../redux/services/apiSlice.js";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";


const CartItem = ({dishId, amount}) => {
    const {isLoading, isError, data: dish} = useGetDishByIdQuery({dishId});

    if (isLoading) {
        return <Loading/>;
    }

    if (isError) {
        return <Error/>;
    }

    return (
        <>
            {dish.name} - {amount}
        </>
    );
};

CartItem.propTypes = {
    dishId: PropTypes.string,
    amount: PropTypes.number,
};

export default CartItem;