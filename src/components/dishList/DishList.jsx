import PropTypes from "prop-types";
import Dish from "../dish/Dish.jsx";
import styles from "./styles.module.css";

const DishList = ({dishIds}) => {
    return (
        <div>
            <h3 className={"small-header"}>Menu</h3>
            <ul className={styles.dishList}>
                {dishIds.map(dishId => {
                    return <Dish key={dishId} id={dishId}/>
                })}
            </ul>
        </div>
    )
}

DishList.propTypes = {
    dishIds: PropTypes.array,
}
export default DishList;