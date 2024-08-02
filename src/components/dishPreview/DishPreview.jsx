import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { selectDishById } from "../../redux/entities/dish/dishSlice.js";

const DishPreview = ({id}) => {
    const dish = useSelector(state => selectDishById(state, id));

    return (
        <div className={styles.preview}>
            <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
        </div>
    );
};

DishPreview.propTypes = {
    id: PropTypes.string,
};

export default DishPreview;