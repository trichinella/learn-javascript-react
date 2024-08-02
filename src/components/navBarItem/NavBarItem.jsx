import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import classNames from "classnames";

const NavBarItem = ({label, path}) => {
    return (
        <NavLink className={({isActive}) => classNames(styles.navBarItem, {
            [styles.active]: isActive,
        })} to={path}>
            {label}
        </NavLink>
    );
};

NavBarItem.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
    path: PropTypes.string,
};

export default NavBarItem;