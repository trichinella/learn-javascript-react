import { useState } from "react";
import PropTypes from "prop-types";
import CounterContainer from "../counter/CounterContainer.jsx";

const MenuItem = ({name}) => {
    const [count, setCount] = useState(0);

    return (
        <li>
            <div>{name}</div>
            <CounterContainer count={count} setCount={setCount} min={0} max={5}/>
        </li>
    )
}

MenuItem.propTypes = {
    name: PropTypes.string,
}
export default MenuItem;