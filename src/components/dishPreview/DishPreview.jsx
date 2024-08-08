import PropTypes from 'prop-types';
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const DishPreview = ({dish}) => {
    return (
        <div className={styles.preview}>
            <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
        </div>
    );
};

DishPreview.propTypes = {
    dish: PropTypes.object,
};

export default DishPreview;