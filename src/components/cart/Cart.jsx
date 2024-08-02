import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cartSlice.js";
import styles from "./styles.module.css";
import CartItem from "../cartItem/CartItem.jsx";

const Cart = () => {
    const items = useSelector(selectCartItems);

    return (
        <div className={styles.cartContainer}>
            {items.length ? (
                <ul>
                    {items.map(({itemId, amount}) => (
                        <li key={itemId}><CartItem dishId={itemId} amount={amount}/></li>
                    ))}
                </ul>
            ) : (
                "empty cart"
            )}
        </div>
    );
};

Cart.propTypes = {};

export default Cart;