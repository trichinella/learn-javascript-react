import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectUserById } from "../../redux/entities/user/userSlice.js";
import { useRequest } from "../../hooks/useRequest.js";
import { RequestStatuses } from "../../helpers/requestStatuses.js";
import { getUsers } from "../../redux/entities/user/getUsers.js";

export const Review = ({review}) => {
    const user = useSelector(state => selectUserById(state, review.userId));
    const requestStatus = useRequest(getUsers);

    if (!user) {
        return <div>...loading</div>;
    }

    if (requestStatus === RequestStatuses.REJECTED) {
        return <div>error</div>;
    }

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