import PropTypes from 'prop-types';
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const DishPreview = ({id, name}) => {
    return (
        <div className={styles.preview}>
            <Link to={`/dish/${id}`}>{name}</Link>
        </div>
    );
};

DishPreview.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
};

export default DishPreview;