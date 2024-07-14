import React, { useState } from "react";
import { Counter } from "../counter/Counter";

export const MenuItem = ({name}) => {
    const [count, setCount] = useState(0);

    return (<li>
        <div>{name}</div>
        <Counter count={count} setCount={setCount} min={0} max={5}/>
    </li>)
}