import PropTypes from "prop-types";

const Counter = ({count, decrement, increment, min, max}) => {
    const isCanBeLower = () => {
        return (typeof min === 'undefined') || count > min;
    };

    const isCanBeHigher = () => {
        return (typeof max === 'undefined') || count < max;
    };

    return (
        <div className={"menu-item-count-block"}>
            <button type={"button"} onClick={() => {
                if (isCanBeLower()) {
                    decrement()
                }
            }} disabled={!isCanBeLower()}>-
            </button>
            <div>{count}</div>
            <button type={"button"} onClick={() => {
                if (isCanBeHigher()) {
                    increment()
                }
            }} disabled={!isCanBeHigher()}>+
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