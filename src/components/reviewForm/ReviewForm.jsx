import { useReducer } from "react";
import Counter from "../counter/Counter.jsx";
import styles from "./styles.module.css";

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
        <label className={styles['review-form-label']}>
            Name
        </label>
        <input
            type={"text"}
            className={"form-input"}
            name={"name"}
            value={state.name}
            onChange={event => dispatch({type: 'name', payload: event.target.value})}
        />
        <label className={styles['review-form-label']}>
            Text
        </label>
        <textarea
            className={"form-input"}
            name={"text"}
            value={state.text}
            onChange={event => dispatch({type: 'text', payload: event.target.value})}
        />
        <label className={styles['review-form-label']}>
            Rating
        </label>
        <Counter
            count={state.rating}
            min={0}
            max={5}
            decrement={() => dispatch({type: 'decrementRating'})}
            increment={() => dispatch({type: 'incrementRating'})}
        />
        <button className={"button"} onClick={() => dispatch({type: 'reset'})} type={'button'}>Save</button>
    </form>)
}