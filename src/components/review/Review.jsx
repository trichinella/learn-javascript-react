import PropTypes from "prop-types";
import styles from "./styles.module.css";
import { useGetUsersQuery } from "../../redux/services/apiSlice.js";

export const Review = ({text, rating, userId}) => {
    const {data: user} = useGetUsersQuery(undefined, {
        selectFromResult: ({data, ...rest}) => ({
            ...rest,
            data: data?.find((entity) => entity.id === userId),
        }),
    });

    return (
        <div className={styles.review}>
            <div className={styles.user}>{user.name}</div>
            <div>Rating: {rating}</div>
            <div>{text}</div>
        </div>
    )
}

Review.propTypes = {
    text: PropTypes.string,
    rating: PropTypes.number,
    userId: PropTypes.string,
}

export default Review;