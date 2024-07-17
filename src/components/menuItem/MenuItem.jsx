import { useState } from "react";
import Counter from "../counter/Counter";
import PropTypes from "prop-types";

const MenuItem = ({name}) => {
    const [count, setCount] = useState(0);

    return (
        <li>
            <div>{name}</div>
            <Counter count={count} setCount={setCount} min={0} max={5}/>
        </li>
    )
}

MenuItem.propTypes = {
    name: PropTypes.string,
}
export default MenuItem;