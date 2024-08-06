import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUserContext } from "../userProvider/UserProvider.jsx";
import DishCartSection from "../dishCartSection/DishCartSection.jsx";
import styles from "./styles.module.css";
import { selectDishById } from "../../redux/entities/dish/dishSlice.js";
import { useRequest } from "../../hooks/useRequest.js";
import { getDishById } from "../../redux/entities/dish/getDishById.js";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";

const Dish = () => {
    const {dishId} = useParams();
    const dish = useSelector(state => selectDishById(state, dishId));
    const {user} = useUserContext();
    const [isLoading, isError] = useRequest(getDishById, dishId);

    if (isLoading()) {
        return <Loading/>;
    }

    if (isError()) {
        return <Error/>;
    }

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