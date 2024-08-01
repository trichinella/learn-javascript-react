import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout.jsx";
import RestaurantList from "../../components/restaurantList/RestaurantList.jsx";
import HomePage from "../../components/homePage/HomePage.jsx";
import Restaurant from "../../components/restaurant/Restaurant.jsx";
import DishList from "../../components/dishList/DishList.jsx";
import ReviewList from "../../components/reviewList/ReviewList.jsx";
import Dish from "../../components/dish/Dish.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout/>
        ),
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: "/restaurants",
                element: <RestaurantList/>,
                children: [
                    {
                        path: ":restaurantId",
                        element: <Restaurant/>,
                        children: [
                            {
                                path: "menu",
                                element: <DishList/>,
                            },
                            {
                                path: "reviews",
                                element: <ReviewList/>,
                            },
                        ],
                    },
                ],
            },
            {
                path: "/dish/:dishId",
                element: <Dish/>,
            },
        ],
    },
]);