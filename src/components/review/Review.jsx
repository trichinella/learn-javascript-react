import PropTypes from "prop-types";
import styles from "./styles.module.css";

export const Review = ({text, rating, userName}) => {
    return (
        <div className={styles.review}>
            <div className={styles.user}>{userName}</div>
            <div>Rating: {rating}</div>
            <div>{text}</div>
        </div>
    )
}

Review.propTypes = {
    text: PropTypes.string,
    rating: PropTypes.number,
    userName: PropTypes.string,
}

export default Review;