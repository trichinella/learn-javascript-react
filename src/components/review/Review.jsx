import PropTypes from "prop-types";

export const Review = ({text}) => {
    return (
        <li>{text}</li>
    )
}

Review.propTypes = {
    text: PropTypes.string,
}
export default Review;