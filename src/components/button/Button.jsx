import PropTypes from 'prop-types';
import styles from "./styles.module.css";
import classNames from 'classnames';
import { useThemeContext } from "../themeProvider/ThemeProvider.jsx";

const Button = ({children, onClick, disabled, size, active = false}) => {
    const {theme} = useThemeContext()

    const btnClass = classNames(styles.button, {
        [styles['button-sm']]: size === 'small',
        [styles['button-' + theme]]: true,
        [styles['button-active-' + theme]]: active,
    });

    return (
        <button
            className={btnClass}
            onClick={onClick ?? null} type={'button'}
            disabled={typeof disabled !== "undefined" ? disabled : false}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    size: PropTypes.string,
};

export default Button;