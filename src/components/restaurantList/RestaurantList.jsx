import { useSelector } from "react-redux";
import RestaurantLabel from "../restaurant/RestaurantLabel.jsx";
import { Outlet } from "react-router-dom";
import { selectRestaurantIds } from "../../redux/entities/restaurant/restaurantSlice.js";
import styles from "./styles.module.css";
import ThemeNavLink from "../themeNavLink/ThemeNavLink.jsx";

const RestaurantList = () => {
    const ids = useSelector(selectRestaurantIds);

    return (
        <>
            <div className={styles.buttonRow}>
                {ids.map(id => {
                    return <ThemeNavLink to={'/restaurants/' + id} key={'button-' + id}>
                        <RestaurantLabel id={id}/>
                    </ThemeNavLink>
                })}
            </div>
            <Outlet/>
        </>
    );
};

RestaurantList.propTypes = {};

export default RestaurantList;