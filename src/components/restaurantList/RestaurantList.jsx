import { useSelector } from "react-redux";
import RestaurantLabel from "../restaurant/RestaurantLabel.jsx";
import { Outlet, useParams } from "react-router-dom";
import ButtonGroup from "../buttonGroup/ButtonGroup.jsx";
import { selectRestaurantIds } from "../../redux/entities/restaurant/restaurantSlice.js";

const RestaurantList = () => {
    const ids = useSelector(selectRestaurantIds);
    const {restaurantId} = useParams();

    return (
        <>
            <ButtonGroup defaultId={restaurantId ?? null} elements={
                ids.map(id => {
                    return {
                        key: id,
                        label: <RestaurantLabel id={id}/>,
                        href: '/restaurants/' + id,
                    };
                })
            }/>
            <Outlet/>
        </>
    );
};

RestaurantList.propTypes = {};

export default RestaurantList;