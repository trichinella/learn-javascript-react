import Restaurant from "../../../components/restaurant/Restaurant.jsx";
import { getRestaurantById } from "../../../api/get-restaurant-by-id.js";
import RestaurantList from "../../../components/restaurantList/RestaurantList.jsx";
import PropTypes from "prop-types";

export function generateStaticParams() {
    return [{ restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" }, { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" }];
}

export async function generateMetadata({ params: { restaurantId } }) {
    const { name } = await getRestaurantById(restaurantId);

    return {
        title: name,
    };
}

async function RestaurantPage({ params: { restaurantId } }) {
    const { id, name } = await getRestaurantById(restaurantId);

    return (
        <div>
            <RestaurantList activeId={restaurantId}/>
            <Restaurant id={id} name={name} />
        </div>
    );
}

RestaurantPage.propTypes = {
    params: PropTypes.object,
}

export default RestaurantPage;