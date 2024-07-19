import PropTypes from "prop-types";

const Counter = ({count, decrement, increment, min, max}) => {
    const isCanBeLower = () => {
        return (typeof min === 'undefined') || count > min;
    };

    const isCanBeHigher = () => {
        return (typeof max === 'undefined') || count < max;
    };

    const tryDecrement = () => {
        if (isCanBeLower()) {
            decrement()
        }
    };

    const tryIncrement = () => {
        if (isCanBeHigher()) {
            increment()
        }
    };

    return (
        <div className={"menu-item-count-block"}>
            <button type={"button"} onClick={tryDecrement} disabled={!isCanBeLower()}>-
            </button>
            <div>{count}</div>
            <button type={"button"} onClick={tryIncrement} disabled={!isCanBeHigher()}>+
            </button>
        </div>
    )
}

Counter.propTypes = {
    count: PropTypes.number,
    decrement: PropTypes.func,
    increment: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
}

export default Counter;