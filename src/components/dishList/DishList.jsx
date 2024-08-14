import styles from "./styles.module.css";
import Caption from "../caption/Caption.jsx";
import DishPreview from "../dishPreview/DishPreview.jsx";
import PropTypes from "prop-types";

const DishList = ({dishes}) => {
    return <div>
        <Caption>Menu</Caption>
        <div className={styles.dishList}>
            {dishes.map(dish => {
                return <DishPreview key={dish.id} id={dish.id} name={dish.name}/>
            })}
        </div>
    </div>
}

DishList.propTypes = {
    dishes: PropTypes.array,
}
export default DishList;