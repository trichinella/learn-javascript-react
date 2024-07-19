import PropTypes from 'prop-types';
import Counter from "./Counter.jsx";

const CounterContainer = ({count, setCount, min, max}) => {
    const decrement = () => {
        setCount((prevState) => prevState - 1)
    };

    const increment = () => {
        setCount((prevState) => prevState + 1)
    };

    return <Counter
        min={min}
        max={max}
        count={count}
        increment={increment}
        decrement={decrement}
    />
};

CounterContainer.propTypes = {
    count: PropTypes.number,
    setCount: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
};

export default CounterContainer;