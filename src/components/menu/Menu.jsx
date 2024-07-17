import MenuItem from "../menuItem/MenuItem.jsx";
import PropTypes from "prop-types";

const Menu = ({menu}) => {
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

Menu.propTypes = {
    menu: PropTypes.array,
}
export default Menu;