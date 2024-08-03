import styles from "./styles.module.css";
import Caption from "../caption/Caption.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DishPreview from "../dishPreview/DishPreview.jsx";
import { useRequest } from "../../hooks/useRequest.js";
import { RequestStatuses } from "../../helpers/requestStatuses.js";
import { selectDishesByRestaurantId } from "../../redux/entities/dish/dishSlice.js";
import { getDishesByRestaurant } from "../../redux/entities/dish/getDishesByRestaurant.js";

const DishList = () => {
    const {restaurantId} = useParams();
    const dishes = useSelector(state => selectDishesByRestaurantId(state, restaurantId));
    const requestStatus = useRequest(getDishesByRestaurant, restaurantId);

    if (requestStatus === RequestStatuses.PENDING) {
        return <div>...loading</div>;
    }

    if (requestStatus === RequestStatuses.REJECTED) {
        return <div>error</div>;
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

DishList.propTypes = {
}
export default DishList;