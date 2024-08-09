import RestaurantLabel from "../restaurant/RestaurantLabel.jsx";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import ThemeNavLink from "../themeNavLink/ThemeNavLink.jsx";
import Loading from "../loading/Loading.jsx";
import Error from "../error/Error.jsx";
import { useGetRestaurantsQuery } from "../../redux/services/apiSlice.js";

const RestaurantList = () => {
    const { isLoading, isError, data: restaurants } = useGetRestaurantsQuery();

    if (isLoading) {
        return <Loading/>;
    }

    if (isError) {
        return <Error/>;
    }

    if (!restaurants.length) {
        return null;
    }

    return (
        <>
            <div className={styles.buttonRow}>
                {restaurants.map(restaurant => {
                    return <ThemeNavLink to={'/restaurants/' + restaurant.id} key={'button-' + restaurant.id}>
                        <RestaurantLabel name={restaurant.name}/>
                    </ThemeNavLink>
                })}
            </div>
            <Outlet/>
        </>
    );
};

RestaurantList.propTypes = {};

export default RestaurantList;