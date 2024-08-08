import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectUserById } from "../../redux/entities/user/userSlice.js";

export const Review = ({review}) => {
    const user = useSelector(state => selectUserById(state, review.userId));

    return (
        <div className={styles.review}>
            <div className={styles.user}>{user.name}</div>
            <div>{review.text}</div>
        </div>
    )
}

Review.propTypes = {
    review: PropTypes.object,
}

export default Review;