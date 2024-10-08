import PropTypes from "prop-types";
import Button from "../button/Button.jsx";
import styles from "./styles.module.css";

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
        <div className={styles.itemCountBlock}>
            <Button onClick={tryDecrement} disabled={!isCanBeLower()} size={"small"}>-</Button>
            <div>{count}</div>
            <Button onClick={tryIncrement} disabled={!isCanBeHigher()} size={"small"}>+</Button>
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