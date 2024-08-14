import PropTypes from 'prop-types';
import styles from "./styles.module.css";
import classNames from "classnames";
import Link from 'next/link'

const NavBarItem = ({label, path, active}) => {
    return (
        <>
            <Link href={path} className={classNames(styles.navBarItem, {
                [styles.active]: active,
            })}>
                {label}
            </Link>
        </>
    );
};

NavBarItem.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
    path: PropTypes.string,
    active: PropTypes.bool,
};

export default NavBarItem;