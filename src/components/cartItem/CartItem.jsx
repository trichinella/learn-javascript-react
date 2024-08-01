import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/dishSlice.js";

const CartItem = ({dishId, amount}) => {
    const dish = useSelector(state => selectDishById(state, dishId)) || {};

    return (
        <li>
            {dish.name} - {amount}
        </li>
    );
};

CartItem.propTypes = {
    dishId: PropTypes.string,
    amount: PropTypes.number,
};

export default CartItem;