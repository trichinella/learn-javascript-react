import PropTypes from 'prop-types';
import styles from "./styles.module.css";
import Counter from "../counter/Counter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, removeCartItem, selectCartItemAmountById } from "../../redux/ui/cart/cartSlice.js";

const DishCartSection = ({id}) => {
    const dispatch = useDispatch();

    const amount = useSelector((state) => selectCartItemAmountById(state, id));

    const addItem = () => {
        dispatch(addCartItem(id));
    };

    const removeItem = () => {
        dispatch(removeCartItem(id));
    };

    return (
        <div className={styles.dishCounter}>
            <Counter count={amount} decrement={removeItem} increment={addItem} min={0} max={5}/>
        </div>
    );
};

DishCartSection.propTypes = {
    id: PropTypes.string,
};

export default DishCartSection;