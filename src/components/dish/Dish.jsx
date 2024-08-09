import { useParams } from "react-router-dom";
import { useUserContext } from "../userProvider/UserProvider.jsx";
import DishCartSection from "../dishCartSection/DishCartSection.jsx";
import styles from "./styles.module.css";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";
import { useGetDishByIdQuery } from "../../redux/services/apiSlice.js";

const Dish = () => {
    const {dishId} = useParams();
    const {isLoading, isError, data: dish} = useGetDishByIdQuery({dishId});
    const {user} = useUserContext();

    if (isLoading) {
        return <Loading/>;
    }

    if (isError) {
        return <Error/>;
    }

    return (
        <div className={styles.dish}>
            <div className={styles.dishHeader}>{dish.name}</div>
            <div>Ingredients: {dish.ingredients.join(', ')}</div>
            {user && <DishCartSection id={dishId}/>}
        </div>
    )
}

Dish.propTypes = {}
export default Dish;