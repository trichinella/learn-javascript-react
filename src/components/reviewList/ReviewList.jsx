import Review from "../review/Review";
import Caption from "../caption/Caption.jsx";
import PropTypes from "prop-types";

const ReviewList = ({reviews, users}) => {
    return (
        <div>
            <Caption>Reviews</Caption>
            <div>
                {reviews.map(review => {
                    const user = users.find(user => user.id === review.userId);
                    return <Review key={review.id} text={review.text} rating={review.rating} userName={user.name}/>
                })}
            </div>
        </div>
    )
}

ReviewList.propTypes = {
    reviews: PropTypes.array,
    users: PropTypes.array,
}
export default ReviewList;