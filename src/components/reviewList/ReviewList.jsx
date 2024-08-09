import Review from "../review/Review";
import Caption from "../caption/Caption.jsx";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";
import { useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from "../../redux/services/apiSlice.js";
import { ReviewForm } from "../reviewForm/ReviewForm.jsx";

const ReviewList = () => {
    const {restaurantId} = useParams();
    const {isLoading, isError, data: reviews} = useGetReviewsByRestaurantIdQuery({restaurantId});
    const {isLoading: isUsersLoading, isError: isUsersError} = useGetUsersQuery();

    if (isLoading || isUsersLoading) {
        return <Loading/>;
    }

    if (isError || isUsersError) {
        return <Error/>;
    }

    return (
        <div>
            <Caption>Reviews</Caption>
            <div>
                {reviews.map(review => {
                    return <Review key={review.id} text={review.text} rating={review.rating} userId={review.userId}/>
                })}
            </div>
            <ReviewForm/>
        </div>
    )
}

ReviewList.propTypes = {}
export default ReviewList;