import PropTypes from "prop-types";
import Dish from "../dish/Dish.jsx";
import styles from "./styles.module.css";
import Caption from "../caption/Caption.jsx";

const DishList = ({dishIds}) => {
    return (
        <div>
            <Caption>Menu</Caption>
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