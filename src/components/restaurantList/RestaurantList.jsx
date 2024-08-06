import { useSelector } from "react-redux";
import RestaurantLabel from "../restaurant/RestaurantLabel.jsx";
import { Outlet } from "react-router-dom";
import { selectRestaurantIds } from "../../redux/entities/restaurant/restaurantSlice.js";
import styles from "./styles.module.css";
import ThemeNavLink from "../themeNavLink/ThemeNavLink.jsx";
import { getRestaurants } from "../../redux/entities/restaurant/getRestaurants.js";
import { useRequest } from "../../hooks/useRequest.js";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";

const RestaurantList = () => {
    const ids = useSelector(selectRestaurantIds);
    const [isLoading, isError] = useRequest(getRestaurants);

    if (isLoading()) {
        return <Loading/>;
    }

    if (isError()) {
        return <Error/>;
    }

    if (!ids.length) {
        return null;
    }

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