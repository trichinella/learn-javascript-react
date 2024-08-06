import Review from "../review/Review";
import Caption from "../caption/Caption.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRequest } from "../../hooks/useRequest.js";
import { selectReviewsByRestaurantId } from "../../redux/entities/review/reviewSlice.js";
import { getReviewsByRestaurant } from "../../redux/entities/review/getReviewsByRestaurant.js";
import { getUsers } from "../../redux/entities/user/getUsers.js";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice.js";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";

const ReviewList = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const reviews = useSelector(state => selectReviewsByRestaurantId(state, restaurant.reviews));
    const [isReviewLoading, isReviewError] = useRequest(getReviewsByRestaurant, restaurantId);
    const [isUserLoading, isUserError] = useRequest(getUsers);

    if (isReviewError() || isUserError()) {
        return <Error/>;
    }

    if (isReviewLoading() || isUserLoading()) {
        return <Loading/>;
    }

    return (
        <div>
            <Caption>Reviews</Caption>
            <div>
                {reviews.map(review => {
                    return <Review key={review.id} review={review}/>
                })}
            </div>
        </div>
    )
}

ReviewList.propTypes = {
}
export default ReviewList;