import React from "react";

export const Counter = ({count, setCount, min, max}) => {
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

    return (<div className={"menu-item-count-block"}>
        <input type={"button"} value={"-"} onClick={decrement} disabled={!isCanBeLower()}/>
        <div>{count}</div>
        <input type={"button"} value={"+"} onClick={increment} disabled={!isCanBeHigher()}/>
    </div>)
}