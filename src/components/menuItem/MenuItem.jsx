import React, {useState} from "react";

export const MenuItem = ({name}) => {
    const MIN = 0;
    const MAX = 5;
    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count <= MIN) {
            return;
        }

        setCount((prevState) => prevState - 1)
    };

    const increment = () => {
        if (count >= MAX) {
            return;
        }

        setCount((prevState) => prevState + 1)
    };

    return (
        <li>
            <div>{name}</div>
            <div className={"menu-item-count-block"}>
                <input type={"button"} value={"-"} onClick={decrement} disabled={count <= MIN}/>
                <div>{count}</div>
                <input type={"button"} value={"+"} onClick={increment} disabled={count >= MAX}/>
            </div>
        </li>
    )
}