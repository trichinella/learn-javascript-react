import styles from "./styles.module.css";
import Caption from "../caption/Caption.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import DishPreview from "../dishPreview/DishPreview.jsx";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice.js";

const DishList = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId)) || {};

    return (
        <div>
            <Caption>Menu</Caption>
            <ul className={styles.dishList}>
                {restaurant.menu.map(dishId => {
                    return <DishPreview key={dishId} id={dishId}/>
                })}
            </ul>
        </div>
    )
}

DishList.propTypes = {
}
export default DishList;