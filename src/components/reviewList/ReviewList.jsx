import Review from "../review/Review";
import PropTypes from "prop-types";

const ReviewList = ({reviews}) => {
    return (
        <div>
            <h3 className={"small-header"}>Reviews</h3>
            <ul className={"review-list"}>
                {reviews.map(review => {
                    return <Review key={review.id} text={review.text}/>
                })}
            </ul>
        </div>
    )
}

ReviewList.propTypes = {
    reviews: PropTypes.array,
}
export default ReviewList;