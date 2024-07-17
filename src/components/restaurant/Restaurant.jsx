import Menu from "../menu/Menu";
import ReviewList from "../reviewList/ReviewList";
import PropTypes from "prop-types";
import { ReviewForm } from "../reviewForm/ReviewForm.jsx";

const Restaurant = ({restaurant}) => {
    //если нет меню - то такой ресторан не нужен
    if (!restaurant?.menu?.length) {
        return null;
    }

    return (
        <div className={"restaurant"}>
            <div className={"restaurant-header"}>{restaurant.name ?? 'Unnamed'}</div>
            <Menu menu={restaurant.menu}/>
            {restaurant?.reviews?.length > 0 && <ReviewList reviews={restaurant.reviews}/>}
            <ReviewForm/>
        </div>
    )
}

Restaurant.propTypes = {
    restaurant: PropTypes.object,
}
export default Restaurant;
