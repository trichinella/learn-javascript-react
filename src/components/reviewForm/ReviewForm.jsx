import { useCallback, useReducer } from "react";
import Counter from "../counter/Counter.jsx";
import styles from "./styles.module.css";
import Button from "../button/Button.jsx";
import { useUserContext } from "../userProvider/UserProvider.jsx";
import { useAddReviewMutation } from "../../redux/services/apiSlice.js";
import { useParams } from "react-router-dom";

const INITIAL_VALUES = () => {
    return {
        text: '', rating: 0,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'text':
            return {
                ...state, text: action.payload,
            };
        case 'decrementRating':
            return {
                ...state, rating: state.rating - 1,
            };
        case 'incrementRating':
            return {
                ...state, rating: state.rating + 1,
            };
        case 'reset':
            return INITIAL_VALUES();
        default:
            return state;
    }
};

export const ReviewForm = () => {
    const {restaurantId} = useParams();

    const [state, dispatch] = useReducer(reducer, INITIAL_VALUES());
    const {user} = useUserContext();
    const [addReview, {isLoading}] = useAddReviewMutation();
    const handleAddReview = useCallback(() => {
        addReview({restaurantId, review: {...state, userId: user.id}});
        dispatch({type: 'reset'});
    }, [addReview, state, user?.id, restaurantId]);

    if (!user) {
        return null;
    }

    return (<form className={styles.reviewForm}>
        <label className={styles.reviewFormLabel}>
            Text
        </label>
        <textarea
            className={styles.formInput}
            name={"text"}
            value={state.text}
            onChange={event => dispatch({type: 'text', payload: event.target.value})}
        />
        <label className={styles.reviewFormLabel}>
            Rating
        </label>
        <Counter
            count={state.rating}
            min={0}
            max={5}
            decrement={() => dispatch({type: 'decrementRating'})}
            increment={() => dispatch({type: 'incrementRating'})}
        />
        <Button onClick={() => dispatch({type: 'reset'})}>Clear</Button>
        <Button disabled={isLoading} onClick={handleAddReview}>Save</Button>
    </form>)
}