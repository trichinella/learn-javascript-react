import React from "react";
import {MenuItem} from "../menuItem/MenuItem.jsx";

export const Menu = ({menu}) => {
    return (
        <div>
            <h3 className={"small-header"}>Menu</h3>
            <ul className={"menu"}>
                {menu.map(menuItem => {
                    return <MenuItem key={menuItem.id} name={menuItem.name}/>
                })}
            </ul>
        </div>
    )
}