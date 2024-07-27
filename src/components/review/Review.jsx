import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/review/reviewSlice.js";
import styles from "./styles.module.css";
import { selectUserById } from "../../redux/user/userSlice.js";

export const Review = ({id}) => {
    const review = useSelector(state => selectReviewById(state, id));
    const user = useSelector(state => selectUserById(state, review.userId));

    return (
        <li className={styles.review}>
            <div className={styles.user}>{user.name}</div>
            <div>{review.text}</div>
        </li>
    )
}

Review.propTypes = {
    id: PropTypes.string,
}
export default Review;