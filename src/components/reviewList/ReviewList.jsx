import Review from "../review/Review";
import Caption from "../caption/Caption.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRequest } from "../../hooks/useRequest.js";
import { RequestStatuses } from "../../helpers/requestStatuses.js";
import { selectReviewsByRestaurantId } from "../../redux/entities/review/reviewSlice.js";
import { getReviewsByRestaurant } from "../../redux/entities/review/getReviewsByRestaurant.js";

const ReviewList = () => {
    const {restaurantId} = useParams();
    const reviews = useSelector(state => selectReviewsByRestaurantId(state, restaurantId));
    const requestStatus = useRequest(getReviewsByRestaurant, restaurantId);

    if (requestStatus === RequestStatuses.PENDING) {
        return <div>...loading</div>;
    }

    if (requestStatus === RequestStatuses.REJECTED) {
        return <div>error</div>;
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