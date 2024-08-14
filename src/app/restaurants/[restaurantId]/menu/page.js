import DishList from "../../../../components/dishList/DishList.jsx";
import RestaurantList from "../../../../components/restaurantList/RestaurantList.jsx";
import { getDishesByRestaurantId } from "../../../../api/get-dishes-by-restaurant-id.js";
import { getRestaurantById } from "../../../../api/get-restaurant-by-id.js";
import Restaurant from "../../../../components/restaurant/Restaurant.jsx";
import PropTypes from "prop-types";

export function generateStaticParams() {
    return [{ restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" }, { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" }];
}

export async function generateMetadata({params: {restaurantId}}) {
    const {name} = await getRestaurantById(restaurantId);

    return {
        title: name + ' - menu',
    };
}

async function MenuPage({params: {restaurantId}}) {
    const dishes = await getDishesByRestaurantId(restaurantId);
    const {id, name} = await getRestaurantById(restaurantId);

    return (
        <>
            <RestaurantList activeId={id}/>
            <Restaurant id={id} name={name}/>
            <DishList restaurantId={restaurantId} dishes={dishes}/>
        </>
    );
}

MenuPage.propTypes = {
    params: PropTypes.object,
}

export default MenuPage;