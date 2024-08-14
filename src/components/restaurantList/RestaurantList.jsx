import { getRestaurants } from "../../api/get-restaurants.js";
import styles from "./styles.module.css";
import RestaurantLabel from "../restaurant/RestaurantLabel.jsx";
import NavBarItem from "../navBarItem/NavBarItem.jsx";
import PropTypes from "prop-types";

const RestaurantList = async ({activeId}) => {
    const restaurants = await getRestaurants();

    return <div className={styles.buttonRow}>
        {restaurants.map(restaurant => {
            return <NavBarItem
                active={activeId === restaurant.id}
                path={'/restaurants/' + restaurant.id}
                key={'button-' + restaurant.id}
                label={<RestaurantLabel name={restaurant.name}/>}/>
        })}
    </div>
};

RestaurantList.propTypes = {
    activeId: PropTypes.bool,
};

export default RestaurantList;