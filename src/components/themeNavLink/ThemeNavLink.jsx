import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useThemeContext } from "../themeProvider/ThemeProvider.jsx";

const ThemeNavLink = ({children, to}) => {
    const {theme} = useThemeContext()

    return (
        <NavLink to={to} className={({isActive}) => classNames(styles.navLink, {
            [styles.active]: isActive,
            [styles['nav-link-' + theme]]: true,
        })}>
            {children}
        </NavLink>
    );
};

ThemeNavLink.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
    to: PropTypes.string,
};

export default ThemeNavLink;