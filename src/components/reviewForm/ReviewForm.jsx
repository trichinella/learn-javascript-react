import { useReducer } from "react";
import Counter from "../counter/Counter.jsx";

const INITIAL_VALUES = () => {
    return {
        name: '', text: '', rating: 0,
    };
};

const producer = (state, action) => {
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
    const [state, dispatch] = useReducer(producer, INITIAL_VALUES());

    return (<form className={"review-form"}>
        <label>
            Name
        </label>
        <input
            type={"text"}
            name={"name"}
            value={state.name}
            onChange={event => dispatch({type: 'name', payload: event.target.value})}
        />
        <label>
            Text
        </label>
        <textarea
            name={"text"}
            value={state.text}
            onChange={event => dispatch({type: 'text', payload: event.target.value})}
        />
        <label>
            Rating
        </label>
        <Counter
            count={state.rating}
            min={0}
            max={5}
            decrement={() => dispatch({type: 'decrementRating'})}
            increment={() => dispatch({type: 'incrementRating'})}
        />
        <button onClick={() => dispatch({type: 'reset'})} type={'button'}>Save</button>
    </form>)
}