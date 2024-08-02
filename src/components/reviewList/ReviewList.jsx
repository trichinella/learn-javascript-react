import Review from "../review/Review";
import Caption from "../caption/Caption.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice.js";

const ReviewList = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId)) || {};
    return (
        <div>
            <Caption>Reviews</Caption>
            <ul className={"review-list"}>
                {restaurant.reviews.map(reviewId => {
                    return <Review key={reviewId} id={reviewId}/>
                })}
            </ul>
        </div>
    )
}

ReviewList.propTypes = {
}
export default ReviewList;