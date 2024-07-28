import PropTypes from 'prop-types';
import styles from "./styles.module.css";

const Caption = ({children}) => {
    return (
        <h3 className={styles.small}>{children}</h3>
    );
};

Caption.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
};

export default Caption;