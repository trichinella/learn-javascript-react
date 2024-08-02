import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectReviewById } from "../../redux/entities/review/reviewSlice.js";
import { selectUserById } from "../../redux/entities/user/userSlice.js";

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