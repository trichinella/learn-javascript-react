import styles from "./styles.module.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { RestaurantPartList } from "./RestaurantPartList.js";
import ThemeNavLink from "../themeNavLink/ThemeNavLink.jsx";
import { useGetRestaurantsQuery } from "../../redux/services/apiSlice.js";

const Restaurant = () => {
    const {restaurantId} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const {data: restaurant} = useGetRestaurantsQuery(undefined, {
        selectFromResult: ({data, ...rest}) => ({
            ...rest,
            data: data?.find((entity) => entity.id === restaurantId),
        }),
    });

    useEffect(() => {
        if (!(location.pathname.includes(RestaurantPartList.REVIEWS) || location.pathname.includes(RestaurantPartList.MENU))) {
            navigate("menu", {replace: true});
        }
    }, [navigate, restaurantId, location]);

    if (!restaurant?.menu?.length) {
        return null;
    }

    return (
        <div className={styles.restaurant}>
            <div className={styles.header}>{restaurant.name ?? 'Unnamed'}</div>
            <div className={styles.buttonRow}>
                <ThemeNavLink to={'/restaurants/' + restaurantId + '/' + RestaurantPartList.MENU}>
                    Menu
                </ThemeNavLink>
                <ThemeNavLink to={'/restaurants/' + restaurantId + '/' + RestaurantPartList.REVIEWS}>
                    Reviews
                </ThemeNavLink>
            </div>
            <Outlet/>
        </div>
    )
}

Restaurant.propTypes = {}
export default Restaurant;
