import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { RestaurantPartList } from "./RestaurantPartList.js";
import ButtonGroup from "../buttonGroup/ButtonGroup.jsx";
import { selectRestaurantById } from "../../redux/entities/restaurant/restaurantSlice.js";

const Restaurant = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId)) || {};
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const isPartInitialized = () => {
            return location.pathname.includes(RestaurantPartList.REVIEWS) || location.pathname.includes(RestaurantPartList.MENU);
        };

        if (!isPartInitialized()) {
            navigate('/restaurants/' + restaurantId + '/' + RestaurantPartList.MENU);
        }
    }, [restaurantId, navigate, location.pathname]);


    const locationPart = location.pathname.includes(RestaurantPartList.REVIEWS) ? RestaurantPartList.REVIEWS : RestaurantPartList.MENU;

    if (!restaurant?.menu?.length) {
        return null;
    }

    return (
        <div className={styles.restaurant}>
            <div className={styles.header}>{restaurant.name ?? 'Unnamed'}</div>
            <ButtonGroup defaultId={locationPart} auto={true} elements={
                [
                    {
                        key: RestaurantPartList.MENU,
                        label: "Menu",
                        href: '/restaurants/' + restaurantId + '/' + RestaurantPartList.MENU,
                    },
                    {
                        key: RestaurantPartList.REVIEWS,
                        label: "Review",
                        href: '/restaurants/' + restaurantId + '/' + RestaurantPartList.REVIEWS,
                    },
                ]
            }/>
            <Outlet/>
        </div>
    )
}

Restaurant.propTypes = {}
export default Restaurant;
