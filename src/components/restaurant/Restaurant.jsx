import ReviewList from "../reviewList/ReviewList";
import PropTypes from "prop-types";
import { ReviewForm } from "../reviewForm/ReviewForm.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurant/restaurantSlice.js";
import DishList from "../dishList/DishList.jsx";
import styles from "./styles.module.css";

const Restaurant = ({id}) => {
    const restaurant = useSelector(state => selectRestaurantById(state, id)) || {};

    //если нет меню - то такой ресторан не нужен
    if (!restaurant?.menu?.length) {
        return null;
    }

    return (
        <div className={styles.restaurant}>
            <div className={styles.header}>{restaurant.name ?? 'Unnamed'}</div>
            <DishList dishIds={restaurant.menu}/>
            {restaurant?.reviews?.length > 0 && <ReviewList reviewIds={restaurant.reviews}/>}
            <ReviewForm/>
        </div>
    )
}

Restaurant.propTypes = {
    id: PropTypes.string.isRequired,
}
export default Restaurant;
