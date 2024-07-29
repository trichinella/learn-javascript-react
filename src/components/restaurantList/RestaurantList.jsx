import TabList from "../tabList/TabList.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/restaurant/restaurantSlice.js";
import RestaurantLabel from "../restaurant/RestaurantLabel.jsx";
import Restaurant from "../restaurant/Restaurant.jsx";

const RestaurantList = () => {
    const ids = useSelector(selectRestaurantIds);

    return (
        <TabList elements={
            ids.map(id => {
                return {
                    key: id,
                    label: <RestaurantLabel id={id}/>,
                    children: <Restaurant key={id} id={id}/>,
                };
            })
        }/>
    );
};

RestaurantList.propTypes = {};

export default RestaurantList;