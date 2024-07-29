import Review from "../review/Review";
import PropTypes from "prop-types";
import Caption from "../caption/Caption.jsx";

const ReviewList = ({reviewIds}) => {
    return (
        <div>
            <Caption>Reviews</Caption>
            <ul className={"review-list"}>
                {reviewIds.map(reviewId => {
                    return <Review key={reviewId} id={reviewId}/>
                })}
            </ul>
        </div>
    )
}

ReviewList.propTypes = {
    reviewIds: PropTypes.array,
}
export default ReviewList;