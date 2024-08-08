import styles from "./styles.module.css";
import Caption from "../caption/Caption.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DishPreview from "../dishPreview/DishPreview.jsx";
import { useRequest } from "../../hooks/useRequest.js";
import { getDishesByRestaurant } from "../../redux/entities/dish/getDishesByRestaurant.js";
import { selectDishesByIds } from "../../redux/entities/dish/dishSlice.js";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice.js";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";

const DishList = () => {
    const {restaurantId} = useParams();
    const {requestLoading, requestError}  = useRequest(getDishesByRestaurant, restaurantId);
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const dishes = useSelector(state => selectDishesByIds(state, restaurant.menu));

    if (requestLoading) {
        return <Loading/>;
    }

    if (requestError) {
        return <Error/>;
    }

    return (
        <div>
            <Caption>Menu</Caption>
            <div className={styles.dishList}>
                {dishes.map(dish => {
                    return <DishPreview key={dish.id} dish={dish}/>
                })}
            </div>
        </div>
    )
}

DishList.propTypes = {}
export default DishList;