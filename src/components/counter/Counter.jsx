import PropTypes from "prop-types";

const Counter = ({count, setCount, min, max}) => {
    const isCanBeLower = () => {
        return (typeof min === 'undefined') || count > min;
    };

    const isCanBeHigher = () => {
        return (typeof max === 'undefined') || count < max;
    };

    const decrement = () => {
        if (!isCanBeLower()) {
            return;
        }

        setCount((prevState) => prevState - 1)
    };

    const increment = () => {
        if (!isCanBeHigher()) {
            return;
        }

        setCount((prevState) => prevState + 1)
    };

    return (
        <div className={"menu-item-count-block"}>
            <button onClick={decrement} disabled={!isCanBeLower()}>-</button>
            <div>{count}</div>
            <button onClick={increment} disabled={!isCanBeHigher()}>+</button>
        </div>
    )
}

Counter.propTypes = {
    count: PropTypes.number,
    setCount: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
}

export default Counter;