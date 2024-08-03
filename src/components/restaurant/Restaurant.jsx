import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { RestaurantPartList } from "./RestaurantPartList.js";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice.js";
import ThemeNavLink from "../themeNavLink/ThemeNavLink.jsx";
import { useRequest } from "../../hooks/useRequest.js";
import { RequestStatuses } from "../../helpers/requestStatuses.js";
import { getRestaurantById } from "../../redux/entities/restaurant/getRestaurantById.js";

const Restaurant = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));
    const navigate = useNavigate();

    const requestStatus = useRequest(getRestaurantById, restaurantId);

    useEffect(() => {
        navigate("menu", {replace: true});
    }, [navigate, restaurantId]);

    if (requestStatus === RequestStatuses.PENDING) {
        return <div>...loading</div>;
    }

    if (requestStatus === RequestStatuses.REJECTED) {
        return <div>error</div>;
    }

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
