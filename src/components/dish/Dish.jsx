import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUserContext } from "../userProvider/UserProvider.jsx";
import DishCartSection from "../dishCartSection/DishCartSection.jsx";
import styles from "./styles.module.css";
import { selectDishById } from "../../redux/entities/dish/dishSlice.js";
import { useRequest } from "../../hooks/useRequest.js";
import { RequestStatuses } from "../../helpers/requestStatuses.js";
import { getDishById } from "../../redux/entities/dish/getDishById.js";

const Dish = () => {
    const {dishId} = useParams();
    const dish = useSelector(state => selectDishById(state, dishId));
    const {user} = useUserContext();
    const requestStatus = useRequest(getDishById, dishId);

    //выглядит конструкция не очень - как сделать корректно?
    if (requestStatus === RequestStatuses.PENDING || (!dish && requestStatus === RequestStatuses.IDLE)) {
        return <div>...loading</div>;
    }

    if (requestStatus === RequestStatuses.REJECTED) {
        return <div>error</div>;
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