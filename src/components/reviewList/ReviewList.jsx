import Review from "../review/Review";
import PropTypes from "prop-types";

const ReviewList = ({reviewIds}) => {
    return (
        <div>
            <h3 className={"small-header"}>Reviews</h3>
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