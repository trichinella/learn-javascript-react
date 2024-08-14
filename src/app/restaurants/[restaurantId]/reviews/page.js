import { getRestaurantById } from "../../../../api/get-restaurant-by-id.js";
import RestaurantList from "../../../../components/restaurantList/RestaurantList.jsx";
import Restaurant from "../../../../components/restaurant/Restaurant.jsx";
import ReviewList from "../../../../components/reviewList/ReviewList.jsx";
import { getReviewsByRestaurantId } from "../../../../api/get-reviews-by-restaurant-id.js";
import { getUsers } from "../../../../api/get-users.js";
import PropTypes from "prop-types";

export function generateStaticParams() {
    return [{ restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" }, { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" }];
}

export async function generateMetadata({ params: { restaurantId } }) {
    const { name } = await getRestaurantById(restaurantId);

    return {
        title: name + ' - reviews',
    };
}

async function ReviewsPage({params: {restaurantId}}) {
    const reviews = await getReviewsByRestaurantId(restaurantId);
    const users = await getUsers();
    const { id, name } = await getRestaurantById(restaurantId);

    return (
        <>
            <RestaurantList activeId={id}/>
            <Restaurant id={id} name={name} />
            <ReviewList restaurantId={restaurantId} reviews={reviews} users={users}/>
        </>
    );
}

ReviewsPage.propTypes = {
    params: PropTypes.object,
}

export default ReviewsPage;