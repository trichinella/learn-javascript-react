import { useReducer } from "react";
import Counter from "../counter/Counter.jsx";
import styles from "./styles.module.css";
import Button from "../button/Button.jsx";

const INITIAL_VALUES = () => {
    return {
        name: '', text: '', rating: 0,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'name':
            return {
                ...state, name: action.payload,
            };
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
    const [state, dispatch] = useReducer(reducer, INITIAL_VALUES());

    return (<form className={"review-form"}>
        <label className={styles.reviewFormLabel}>
            Name
        </label>
        <input
            type={"text"}
            className={styles.formInput}
            name={"name"}
            value={state.name}
            onChange={event => dispatch({type: 'name', payload: event.target.value})}
        />
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
        <Button onClick={() => dispatch({type: 'reset'})}>Save</Button>
    </form>)
}