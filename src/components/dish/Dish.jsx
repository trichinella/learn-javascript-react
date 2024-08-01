import styles from "./styles.module.css";
import { useUserContext } from "../userProvider/UserProvider.jsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDishById } from "../../redux/entities/dish/dishSlice.js";
import DishCartSection from "../dishCartSection/DishCartSection.jsx";

const Dish = () => {
    const {dishId} = useParams();
    const dish = useSelector(state => selectDishById(state, dishId));

    const {user} = useUserContext();

    return (
        <div className={styles.dish}>
            <div className={styles.dishHeader}>{dish.name}</div>
            <div>Ingredients: {dish.ingredients.join(', ')}</div>
            {user && <DishCartSection id={dishId} />}
        </div>
    )
}

Dish.propTypes = {}
export default Dish;