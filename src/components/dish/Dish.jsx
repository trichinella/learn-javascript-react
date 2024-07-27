import { useState } from "react";
import PropTypes from "prop-types";
import CounterContainer from "../counter/CounterContainer.jsx";
import styles from "./styles.module.css";
import { useUserContext } from "../userProvider/UserProvider.jsx";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dish/dishSlice.js";

const Dish = ({id}) => {
    const dish = useSelector(state => selectDishById(state, id));

    const [count, setCount] = useState(0);
    const {user} = useUserContext()

    return (
        <li>
            <div className={styles.dishHeader}>{dish.name}</div>
            <div>Ingredients: {dish.ingredients.join(', ')}</div>
            {user &&
                <div className={styles.dishCounter}><CounterContainer count={count} setCount={setCount} min={0}
                                                                      max={5}/></div>}
        </li>
    )
}

Dish.propTypes = {
    id: PropTypes.string,
}
export default Dish;