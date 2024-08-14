import styles from "./styles.module.css";
import PropTypes from "prop-types";

const Dish = ({name, ingredients}) => {
    return (
        <div className={styles.dish}>
            <div className={styles.dishHeader}>{name}</div>
            <div>Ingredients: {ingredients.join(', ')}</div>
        </div>
    )
}

Dish.propTypes = {
    name: PropTypes.string,
    ingredients: PropTypes.array,
}

export default Dish;